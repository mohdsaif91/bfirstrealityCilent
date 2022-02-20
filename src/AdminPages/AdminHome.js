import React, { useState } from "react";
import "./AdminHome.scss";
import AdminRegistration from "./AdminRegistration";
import { Layout, Menu, Breadcrumb } from 'antd';
import { Typography } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  BankFilled,
} from '@ant-design/icons';

// formparthere


const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function AdminHome() {
  const [collapsed, setcollapsed] = useState(false);
  return (

    <div id="laout">
      <Layout>
        <Header  className="adminhead" style={{ padding: 0 }} >
          <div>
            <Title level={3} style={{ color: "black", paddingLeft: 32, paddingTop:10 }}>FUTURE HOMES</Title>
          </div>
        </Header>
      </Layout>


      <Layout style={{ minHeight: '100vh' }}>
        <Sider  collapsible collapsed={collapsed} onCollapse={() => setcollapsed(!collapsed)}>
          <div className="logo" >
            <h1 style={{ color: "white" }}>Dashboard</h1>
          </div>

          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item className="it" key="1" icon={<PieChartOutlined />}>
              Admin
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              property overviews
            </Menu.Item>

            <SubMenu key="sub2" icon={<BankFilled />} title="PROPERTY">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout  className="site-layout">

          <Content className="contentpart"  style={{ margin: '0 16px' }}>
            <div id="part" className="site-layout-background" style={{ padding: 24, minHeight: 450, marginTop:20 }}>
              content part here
              <div className="formpart">
              <AdminRegistration/>

              </div>
            </div>
          </Content>
          <Footer id="fot" style={{ textAlign: 'center' }}>FOOTEER PART</Footer>
        </Layout>
      </Layout>

    </div>
  );
}
