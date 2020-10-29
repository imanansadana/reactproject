import React, { Component } from "react";

class Counter extends Component {
  componentDidMount() {
    console.log("Counter Mounted");
  }

  componentDidUpdate() {
    console.log("Counter Updated");
  }

  render() {
    console.log("Counter Rendered");
    return (
      <div>
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}

export default Counter;
