import React, { Component } from "react";
import ClassComponent from "./Components/ClassComponent/ClassComponent";
import FunctionalComponent from "./Components/FunctionalComponent/FunctionalComponent";

class App extends Component {
  render() {
    return (
      <div>
        <ClassComponent></ClassComponent>
        <FunctionalComponent></FunctionalComponent>
      </div>
    );
  }
}

export default App;
