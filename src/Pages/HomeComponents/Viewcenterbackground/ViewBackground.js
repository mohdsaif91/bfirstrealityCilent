import React from "react";

import "./ViewBackground.scss";

// const imageUrl =
//   "https://www.transparentpng.com/thumb/building/building-icon-clipart-10.png";

export default function ViewBackground() {
  return (
    <>
      <div className="view">
        {/* <h1>iufgweufheufg</h1> */}
        <div id="portfolio">
          <div className="viewbackground">
            <img src="./assets/centerbuild.jpg" alt="" />
          </div>
          <div className="viewcontent">
            <h1>Buy Premium Home With Future Home</h1>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
              molestias!
            </h2>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
