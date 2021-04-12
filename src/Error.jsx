import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const Error = () => {
  return (
    <>
    <h1>oops! 404 error</h1>
    <NavLink to="/about"> Go Back</NavLink>
    </>
  );
};

export default Error;