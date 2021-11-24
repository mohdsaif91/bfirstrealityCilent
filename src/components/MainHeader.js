import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Icon, Input, Button, Drawer } from "antd";
import { AlignRightOutlined } from "@ant-design/icons"; //importing ant design icons

import { MiniSidebar } from "./MiniSideBar";

export default function MainHeader() {
  const [shown, setShown] = useState(false);

  const showSidebar = () => {
    setShown(true);
  };

  const drawerClosed = () => {
    setShown(false);
  };

  function RightMenu({ mode }) {
    return (
      <Menu mode={mode}>
        <Menu.Item key="home">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="contact">
          <NavLink to="/contact">Contact</NavLink>
        </Menu.Item>
        <Menu.Item key="about">
          <NavLink to="/about">About</NavLink>
        </Menu.Item>
        <Menu.Item key="services">
          <NavLink to="/services">Services</NavLink>
        </Menu.Item>
      </Menu>
    );
  }

  function LeftMenu({ mode }) {
    return (
      <Menu mode={mode}>
        <Menu.Item key="mail">
          <a href="/login">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Signup</a>
        </Menu.Item>
      </Menu>
    );
  }
  return (
    <nav className="menu">
      <div className="main-logo">
        <NavLink to="/">
          <a href="#">BeFirstReality</a>
        </NavLink>
      </div>
      <div className="menu-container">
        <div className="right-menu">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="small-screen-btn"
          type="primary"
          onClick={showSidebar}
        >
          <AlignRightOutlined size="medium" />
        </Button>
        <Drawer
          title="Sidebar Drawer"
          placement="left"
          className="menu-drawer"
          closable={false}
          onClose={drawerClosed}
          visible={shown}
        >
          <MiniSidebar />
        </Drawer>
      </div>
    </nav>
  );
}
