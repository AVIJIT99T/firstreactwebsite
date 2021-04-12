import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => {
  return (
    <>
    <div className="menu_style">
    <NavLink activeClassName="active_class" to="/home">Home</NavLink>
    <NavLink activeClassName="active_class" to="/about">About</NavLink>
    <NavLink activeClassName="active_class" to="/contact">Contact</NavLink>
    <NavLink activeClassName="active_class" to="/services">Services</NavLink>
    
    </div>
    
    </>
  );
};

export default Menu;