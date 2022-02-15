import { Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "antd";
import { useEffect, useState } from "react";

import Home from "./Pages/Home";
import { About } from "./Pages/About";
import { Services } from "./Pages/Services";
import { Contact } from "./Pages/Contact";
import Login from "./Pages/forminandout/Login";
import MainHeader from "./components/MainHeader";
import FooterComponent from "./components/FooterComponent";
import { Registration } from "./Pages/forminandout/Registration";
import AdminHome from "./AdminPages/AdminHome";
import { useSelector } from "react-redux";
import AdminHeader from "./AdminPages/AdminHeader";

function App() {
  const [login, setlogin] = useState(false);

  const Auth = useSelector((state) => state.AuthReducer);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/login" || pathname.includes("admin")) {
      setlogin(true);
    }
  }, [pathname]);

  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <Header className="header-top">
        {/* {Auth.loggedIn && Auth.user?.role !== "admin" ? ( */}
        {login ? <AdminHeader /> : <MainHeader />}
      </Header>
      <Content>
        {/* <SearchBar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="Registration" element={<Registration />} />
          {/* Admin */}
          <Route path="adminHome" element={<AdminHome />} />
        </Routes>
      </Content>
      {!login && (
        <Footer className="footer-container">
          <FooterComponent />
        </Footer>
      )}
    </Layout>
  );
}

export default App;
