import React from "react";
import "./Countup.scss";
import { SmileOutlined, CheckOutlined, HomeOutlined } from "@ant-design/icons";
export default function Countup() {
  return (
    <>
      <section className="counter_section">
        {/* <div className="countupsect"> */}
        <div className="counterup">
          <div className="divico">
            <i className="firstico">
              <HomeOutlined />
            </i>
          </div>
          <div className="counters">
            <h2>
              <span data-count="21">21</span>K
            </h2>
            {/* <h2>1000L</h2> */}

            <p>TOTAL PROPERTIES</p>
          </div>
        </div>
        <div className="counterup">
          <div className="divico">
            <i className="firstico">
              <CheckOutlined />
            </i>
          </div>
          <div className="counters">
            <h2>
              <span data-count="21">360</span>+
            </h2>
            {/* <h2>1000L</h2> */}

            <p>VERIFIED AGENTS</p>
          </div>
        </div>
        <div className="counterup">
          <div className="divico">
            <i className="firstico">
              <SmileOutlined />
            </i>
          </div>
          <div className="counters">
            <h2>
              <span data-count="21">1000</span>K
            </h2>
            {/* <h2>1000L</h2> */}
            <p>HAPPY CUSTOMERS</p>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
