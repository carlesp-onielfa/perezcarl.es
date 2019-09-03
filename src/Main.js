import React, { Component } from "react";
import Experience from "./Experience";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <h1>Carles Pérez Onielfa</h1>
            <ul className="header">
                <li><NavLink to="/">About me</NavLink></li>
                <li><NavLink to="/experience">Experience</NavLink></li>
                {/*<li><NavLink to="/">Projects</NavLink></li>*/}
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={AboutMe}/>
                <Route path="/experience" component={Experience}/>
                <Route path="/contact" component={Contact}/>
            </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;