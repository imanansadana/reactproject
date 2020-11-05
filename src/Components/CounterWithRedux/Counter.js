import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.props.ctr}</h2>
        <button onClick={this.props.increase}>Increase</button>
        <button onClick={this.props.decrease}>Decrease</button>
        <button onClick={() => this.props.add(10)}>Add 10</button>
        <button onClick={this.props.subtract}>Add 10</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ctr: state.counter };
};

const mapDispatchToProps = (dispath) => {
  return {
    increase: () => dispath({ type: "INC" }),
    decrease: () => dispath({ type: "DEC" }),
    add: (val) => dispath({ type: "ADD", value: val }),
    subtract: () => dispath({ type: "REMOVE", value: 10 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default connect(mapStateToProps)(Counter);           IF NO DISPATCHES
// export default connect(null, mapDispatchToProps)(Counter);  IF NO PROP
