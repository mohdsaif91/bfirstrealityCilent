import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Title from "antd/lib/skeleton/Title";

const { Header, Content, Footer, Sider } = Layout;

export default function AdminHeader() {
  return (
    <Layout>
      <Header className="adminhead" style={{ padding: 0 }}>
        <div>
          <Title
            level={3}
            style={{ color: "black", paddingLeft: 32, paddingTop: 10 }}
          >
            FUTURE HOMES
          </Title>
        </div>
      </Header>
    </Layout>
  );
}
