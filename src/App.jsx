import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Home from "./Home";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./Navbar";
import Footer1 from "./Footer1"


const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/services" component={Services}/> 
    <Redirect to="/home" />
    </Switch>
    <Footer1 />
    </>
  );
};

export default App;
