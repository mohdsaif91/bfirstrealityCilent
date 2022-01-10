import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Drawer } from "antd";
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
      <ul className="right-container active">
        <li className="nav-list">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="nav-list">
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="menu">
      <div className="main-logo">
        <NavLink to="/">
          <a href="/#">BeFirstReality</a>
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
