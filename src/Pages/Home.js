import React from "react";
// import Cards from "./cards/Cards";
import Cards from "./card/Cards";
export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
    {/* <Cards/> */}
    <Cards
    imageUrl='https://www.transparentpng.com/thumb/building/building-icon-clipart-10.png'
    Title='Card title'
    Body='lorem siufheiuf hheiuhfiuhewiufheiufiuef k fuihfiuhfihfi hfih'
    />
    <Cards
    imageUrl='https://www.transparentpng.com/thumb/building/building-icon-clipart-10.png'
    Title='Card title'
    Body='lorem siufheiuf hheiuhfiuhewiufheiufiuef k fuihfiuhfihfi hfih'
    />
    <Cards
    imageUrl='https://www.transparentpng.com/thumb/building/building-icon-clipart-10.png'
    Title='Card title'
    Body='lorem siufheiuf hheiuhfiuhewiufheiufiuef k fuihfiuhfihfi hfih'
    />
    </>
  );
}
