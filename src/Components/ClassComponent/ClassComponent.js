import React, { Component } from "react";
import NameCard from "./NameCard/NameCard";
import "./ClassComponent.css";
import MockData from "./MockData";

class ClassComponent extends Component {
  state = MockData;

  nameHandler = (name) => {
    this.setState({
      students: [
        { id: "1", name: "Manan", text: "First Text" },
        { id: "2", name: name, text: "Second Text" },
        { id: "3", name: "Ashish", text: "Third Text" },
        { id: "4", name: "Madhav", text: "Fifth Text" },
      ],
    });
    console.log(this.state);
  };

  changeNameHandler = (event) => {
    this.setState({
      students: [
        { id: "1", name: "Manan", text: "First Text" },
        { id: "2", name: event.target.value, text: "Second Text" },
        { id: "3", name: "Ashish", text: "Third Text" },
        { id: "4", name: "Madhav", text: "Fifth Text" },
      ],
    });
  };

  deleteNameHandler = (index) => {
    // var changing = this.state.students;
    console.log("i'm working");
    var changing = [...this.state.students];
    changing.splice(index, 1);
    this.setState({ students: changing });
  };

  render() {
    return (
      <div className="App">
        <h1>
          I am a class based component with state and props and event handlers
        </h1>
        <div className="cards">
          {this.state.students.map((item, index) => {
            return (
              <NameCard
                key={item.id}
                id={item.id}
                del={() => this.deleteNameHandler(index)}
                change={this.changeNameHandler}
                name={item.name}
                text={item.text}
              ></NameCard>
            );
          })}
        </div>

        <button onClick={() => this.nameHandler("Karan")}>Karan</button>
        <button onClick={this.nameHandler.bind(this, "Arjun")}>Arjun</button>
      </div>
    );
  }
}

export default ClassComponent;
