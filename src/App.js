import React, { Component } from "react";
import ClassComponent from "./Components/ClassComponent/ClassComponent";
import FunctionalComponent from "./Components/FunctionalComponent/FunctionalComponent";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AboutUs />
        <ClassComponent></ClassComponent>
        <FunctionalComponent></FunctionalComponent>
        <ContactUs />
      </div>
    );
  }
}

export default App;
