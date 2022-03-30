import { Carousel } from "antd";
import React from "react";
// import CaroNav from "./CaroNav";
// import "./carousel.scss";
import imge5 from "../../images/caro5.jpg";
import imge2 from "../../images/caro2.jpg";
import imge3 from "../../images/caro3.jpg";
import imge4 from "../../images/caro4.jpg";
import Video from "../../images/carovideo.mp4";

import "./styled.scss";
import { Input, Space } from "antd";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",

  textAlign: "center",
  // background: "#364d79",
  background: "red",
};

export default function CarouSel() {
  return (
    <>
      {/* <div> */}
      {/* <div className="caro">         */}
      {/* <Carousel autoplay>
              <div style={contentStyle}>
                <img src={imge2} alt="" className="sliderimg" />
              </div> */}
      {/* <div style={contentStyle}>
                <img src={imge4} alt="" className="sliderimg" />
              </div>
              <div style={contentStyle}>
                <img src={imge2} alt="" className="sliderimg" />
              </div>
              <div style={contentStyle}>
                <img src={imge4} alt="" className="sliderimg" />
              </div> */}
      {/* </Carousel> */}

      {/* <Section id="hero"> */}
      <div className="background">
        <img src={imge2} alt="" />
        {/* <video autoPlay loop muted id="video">
          <source src={Video} type="video/mp4" />
        </video> */}
      </div>

      <div className="content">
        <div className="Navcaro">
          <ul>
            <li>
              <a href="#">NAVI-MUMBAI</a>
            </li>
            <li>
              <span>|</span>
              <a href="">WESTERN SUBURBS</a>
            </li>
            <li>
              <span>|</span>
              <a href="">EASTERN SUBURBS</a>
            </li>
            <li>
              <span>|</span>
              <a href="">KALYAN-DOMBIVLI</a>
            </li>
          </ul>
        </div>
        <div className="herosearch" id="Herosearch">
          {/* <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          /> */}
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            id="navsearch"
            // style={{
            //   width: 500,
            //   fontSize: 16,
            //   color: "red",
            //   border: 55,
            //   padding: 22,
            // }}
          />
        </div>
        <div className="title">
          <h1>FUTURE HOMES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
            tenetur!
          </p>
        </div>
        {/* <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search Your location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div> */}
      </div>
      {/* </Section> */}
    </>
  );
}
