import React from "react";
import web from "../src/images/pic1.jpg";
import Common from "./Common"

const Home = () => {
  return (
    <>
    <Common 
    name="Grow your business with"
    btname="Get Started"
    visit="/services"
    imgsrc={web} />
    </>
  );
};

export default Home;