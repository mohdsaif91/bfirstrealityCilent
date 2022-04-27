import React from "react";
import "./Topproperty.scss";

const data = [
  {
    image: "./assets/caro5.jpg",
    name: "Sparkel Building",
    price: "$55554",
  },
  {
    image: "./assets/centerbuild.jpg",

    name: "Tokeyo",
    price: "$14000",
  },
  {
    image: "./assets/caro3.jpg",

    name: "golden plaza",
    price: "$80000",
  },

  {
    image: "./assets/caro4.jpg",

    name: "light house",
    price: "$124000",
  },
];
export default function Topproperty() {
  return (
    <>
      <div id="products">
        <div className="titletop">
          {/* <h1 id="heading">
            <span>Favourite</span> All the time!
          </h1> */}
          <h1 className="yell">view our newest home</h1>
        </div>
        <div className="products">
          {data.map((product) => {
            return (
              <div className="product">
                <div className="image">
                  <img src={product.image} alt="" />
                </div>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam laborum perferendis numquam!
                </p>
                <button>Buy Now</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
