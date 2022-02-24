import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Typography } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  BankFilled,
} from "@ant-design/icons";

// import AdminRegistration from "./AdminRegistration";

import "./AdminHome.scss";

// formparthere

const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function AdminHome() {
  const [collapsed, setcollapsed] = useState(false);
  return <div id="laout">HI</div>;
}
