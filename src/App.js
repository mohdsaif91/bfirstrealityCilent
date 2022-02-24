import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Layout, Menu } from "antd";
import {
  BankFilled,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";

import Home from "./Pages/Home";
import { About } from "./Pages/About";
import { Services } from "./Pages/Services";
import { Contact } from "./Pages/Contact";
import Login from "./components/Auth/Login";
import MainHeader from "./components/MainHeader";
import FooterComponent from "./components/FooterComponent";
import AdminHome from "./AdminPages/AdminHome";
import AdminHeader from "./AdminPages/AdminHeader";
import ViewProperty from "./AdminPages/Property/ViewProperty";
import PropertyRegistration from "./AdminPages/Property/PropertyRegistration";

function App() {
  const [login, setlogin] = useState(false);
  const [collapsed, setcollapsed] = useState(false);

  const Auth = useSelector((state) => state.AuthReducer);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/login" || pathname.includes("admin")) {
      setlogin(true);
    }
  }, [pathname]);

  const { Header, Footer, Content, Sider } = Layout;

  console.log(Auth.user?.role);
  return (
    <Layout hasSider={Auth.user?.role === "admin"}>
      {Auth.user?.role === "admin" && (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setcollapsed(!collapsed)}
        >
          <div className="logo">
            <h1 style={{ color: "white" }}>Future Homes</h1>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item
              onClick={() => navigate("/adminHome")}
              className="it"
              key="1"
              icon={<PieChartOutlined />}
            >
              Admin
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              property overviews
            </Menu.Item>

            <SubMenu key="sub2" icon={<BankFilled />} title="PROPERTY">
              <Menu.Item key="6" onClick={() => navigate("/adminViewProperty")}>
                view
              </Menu.Item>
              <Menu.Item key="8" onClick={() => navigate("/adminAddProperty")}>
                Add
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
      )}
      <Layout>
        {Auth.user?.role === "admin" ? (
          <Header className="header-top">
            <AdminHeader />
          </Header>
        ) : !login ? (
          <Header className="header-top">
            <MainHeader />
          </Header>
        ) : null}
        <Content>
          {/* <SearchBar/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="Registration" element={<Registration />} /> */}

            {/* Admin Routes */}
            <Route path="adminHome" element={<AdminHome />} />
            <Route path="adminViewProperty" element={<ViewProperty />} />
            <Route path="adminAddProperty" element={<PropertyRegistration />} />
          </Routes>
        </Content>
        {!login && Auth.user?.role !== "admin" && (
          <Footer className="footer-container">
            <FooterComponent />
          </Footer>
        )}
      </Layout>
    </Layout>
  );
}

export default App;
