import React, { Component } from "react";
import Counter from "./Counter/Counter";

class LifeCycleMethods extends Component {
  constructor() {
    super();
    console.log("Parent Component Object Constructed");
  }

  state = { count: 0, something: "manan" };

  componentDidMount() {
    console.log("Parent Component Mounted");
  }

  componentDidUpdate() {
    console.log("Parent Component Updated");
  }

  addHandler = () => {
    var counter = { ...this.state };
    counter.count = this.state.count + 1;
    this.setState(counter);
  };
  subtractHandler = () => {
    var counter = { ...this.state };
    counter.count = this.state.count - 1;
    this.setState(counter);
  };

  render() {
    console.log("Parent Component Rendered");
    return (
      <div>
        <Counter count={this.state.count} />
        <button onClick={this.addHandler}>Add</button>
        <button onClick={this.subtractHandler}>Subtract</button>
      </div>
    );
  }
}

export default LifeCycleMethods;
