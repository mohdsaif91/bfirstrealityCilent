import React from "react";
// import "./home.scss";
// import Cards from "./cards/Cards";
import Cards from "./card/Cards";
import CarouSel from "./carousel/carousel";
import Topproperty from "./HomeComponents/centerpart/Topproperty";
import Centerimg from "./HomeComponents/centerpart/Topproperty";
import Countup from "./HomeComponents/Count-up/Countup";
import Services from "./HomeComponents/Services/Services";
import Testimonial from "./HomeComponents/testimonial/Testimonial";
import ViewBackground from "./HomeComponents/Viewcenterbackground/ViewBackground";

export default function Home() {
  return (
    <>
      {/* <Cards/> */}
      <CarouSel />
      <Cards
      // imageUrl="https://www.transparentpng.com/thumb/building/building-icon-clipart-10.png"
      // Title="Card title"
      // Body="lorem siufheiuf hheiuhfiuhewiufheiufiuef k fuihfiuhfihfi hfih"
      />
      <Cards
      // imageUrl="https://www.transparentpng.com/thumb/building/building-icon-clipart-10.png"
      // Title="Card title"
      // Body="lorem siufheiuf hheiuhfiuhewiufheiufiuef k fuihfiuhfihfi hfih"
      />
      {/* <Cards
      // imageUrl="https://www.transparentpng.com/thumb/building/building-icon-clipart-10.png"
      // Title="Card title"
      // Body="lorem siufheiuf hheiuhfiuhewiufheiufiuef k fuihfiuhfihfi hfih"
      /> */}
      <Countup />
      <Topproperty />
      <Services />
      <ViewBackground />
      <Testimonial />
    </>
  );
}
