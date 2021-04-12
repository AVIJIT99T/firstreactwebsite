import React from "react";
import web from "../src/images/pic1.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
    <Common 
    name="Welcome to the official Page"
    btname="Contact now"
    visit="/contact"
    imgsrc={web} />
    </>
  );
};

export default About;