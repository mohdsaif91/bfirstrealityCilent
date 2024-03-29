import React from "react";
import Icon, {
  EllipsisOutlined,
  GlobalOutlined,
  HomeOutlined,
  MessageOutlined,
  NotificationOutlined,
  PlaySquareOutlined,
  ReadOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export default function Sidebar() {
  function SidebarOption({ text, name, tag }) {
    return (
      <div className="sidebar-option">
        <Icon className="sidebar-icon" component={name} size="medium" />
        <h2>{text}</h2>
      </div>
    );
  }

  return (
    <div className="sidebar">
      <SidebarOption text="Home" name={HomeOutlined} />
      <SidebarOption text="Profile" name={UserOutlined} />
      <SidebarOption text="Messages" name={MessageOutlined} />
      <SidebarOption text="Notify" name={NotificationOutlined} />
      <SidebarOption text="News" name={ReadOutlined} />
      <SidebarOption text="Videos" name={PlaySquareOutlined} />
      <SidebarOption text="Explore" name={GlobalOutlined} />
      <SidebarOption text="More" name={EllipsisOutlined} />
      
    </div>
  );
}

export function MiniSidebar() {
  function SidebarOption({ text, name, tag }) {
    return (
      <div className="sidebar-option">
        <Icon className="sidebar-icon" component={name} size="medium" />
        <h3 style={{ paddingTop: "23px" }}>{text}</h3>
      </div>
    );
  }
  return (
    <div className="mini-sidebar">
      <SidebarOption text="Home" name={HomeOutlined} />
      <SidebarOption text="Profile" name={UserOutlined} />
      <SidebarOption text="Messages" name={MessageOutlined} />
      <SidebarOption text="Notify" name={NotificationOutlined} />
      <SidebarOption text="News" name={ReadOutlined} />
      <SidebarOption text="Videos" name={PlaySquareOutlined} />
      <SidebarOption text="Explore" name={GlobalOutlined} />
      <SidebarOption text="More" name={EllipsisOutlined} />
      <SidebarOption text="login"  name={LoginOutlined} />
      <SidebarOption text="logout"  name={LogoutOutlined} />

    </div>
  );
}
