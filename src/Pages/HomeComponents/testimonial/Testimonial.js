import React from "react";
import { Carousel } from "antd";
import "./Testimonial.scss";
import { UserOutlined } from "@ant-design/icons";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "364d79",
};

export default function Testimonial() {
  return (
    <>
      <Carousel autoplay>
        <div style={contentStyle} className="testbox1">
          <div className="testfirst">
            <i>
              <UserOutlined />
            </i>

            <h3>Testimonial</h3>
            <h1>Our Happy Clients Say About Us</h1>
            <p>
              '' Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              maxime nam itaque vero labore magni incidunt eligendi inventore
              magnam placeat!''
            </p>
          </div>
        </div>

        <div style={contentStyle} className="testbox1">
          <div className="testfirst">
            <i>
              <UserOutlined />
            </i>

            <h3>Testimonial</h3>

            <h1>Our Happy Clients Say About Us</h1>
            <p>We had a beautiful experience buying our first home with .</p>
          </div>
        </div>

        <div style={contentStyle} className="testbox1">
          <div className="testfirst">
            <i>
              <UserOutlined />
            </i>

            <h3>Testimonial</h3>

            <h1>Our Happy Clients Say About Us</h1>
            <p>We had a beautiful experience buying our first home with .</p>
          </div>
        </div>
      </Carousel>
    </>
  );
}
