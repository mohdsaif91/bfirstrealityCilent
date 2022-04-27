import React from "react";
import "./Services.scss";
// import imge5 from "../../images/caro5.jpg";
// import imge2 from "../../images/caro2.jpg";
// import imge3 from "../../images/caro3.jpg";
// import imge4 from "../../images/caro4.jpg";
// import imge from "../../images/caro2.jpg";
// import Serviceico1 from "./src/components/images/serviceico1.png";
// import navBar from "./src/components/header/navBar";
// import "./src/css/header.css";
// import Serviceico from "./src/components/images/servicesico1.png";
// import sefe from "./src/components/images/caro3.jpg";

export default function Services() {
  return (
    <>
      <div id="services">
        <div className="title">
          <h1 className="yellowtitle">SERVICES</h1>

          <h1 className="yellow">What Do We Do For You?</h1>
          <p>
            A technology solution custom built to help Real Estate Companies
            professionally manage leads and convert them to customers with
            reduced cycle time
          </p>
        </div>
        <div className="services">
          <div className="service">
            <img src="./assets/ico1.png" alt="" />
            {/* <img src="" alt="fefwefff" /> */}
            <p>
              A technology solution custom built to help Real Estate Companies
              professionally manage leads and convert them to customers with
              reduced cycle time
            </p>
            <button>Read More</button>
          </div>
          <div className="service">
            {/* <img src={sefe} alt="" /> */}
            <img src="./assets/ico2.png" alt="" />

            <p>
              The FutureHomes Syndicate program is an important industry
              initiative of FutureHomes to bring all retail and institutional
              brokers on a common platform.
            </p>
            <button>Read More</button>
          </div>

          <div className="service">
            {/* <img src={Services3} alt="" /> */}
            <img src="./assets/ico3.png" alt="" />

            <p>
              The FutureHomes Syndicate program is an important industry
              initiative of FutureHomes to bring all retail and institutional
              brokers on a common platform.
            </p>
            <button>Read More</button>
          </div>
          {/* <div className="service yellow">
            <img src={Services1} alt="" />
            
            <p>
              Institutional brokerage services as a Channel Partner to Real
              Estate Companies is one of FutureHomes turnkey services.
            </p>
            <button>Read More</button>
          </div> */}
        </div>
      </div>
    </>
  );
}
