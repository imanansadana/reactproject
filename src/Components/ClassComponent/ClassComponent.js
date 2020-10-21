import React, { Component } from "react";
import NameCard from "../NameCard/NameCard";

class ClassComponent extends Component {
  state = {
    students: [
      { id: "ffdjhvv", name: "Manan", text: "First Text" },
      { id: "ffdv", name: "Ankush", text: "Second Text" },
      { id: "ffdvghknv", name: "Ashish", text: "Third Text" },
      { id: "ffcfghkjbdv", name: "Madhav", text: "Fourth Text" },
    ],
    othervar: 1,
  };

  nameHandler = (name) => {
    this.setState({
      students: [
        { name: "Manan", text: "First Text" },
        { name: name, text: "Second Text" },
        { name: "Ashish", text: "Third Text" },
        { name: "Madhav", text: "Fifth Text" },
      ],
    });
    console.log(this.state);
  };

  changeNameHandler = (event) => {
    this.setState({
      students: [
        { name: "Manan", text: "First Text" },
        { name: event.target.value, text: "Second Text" },
        { name: "Ashish", text: "Third Text" },
        { name: "Madhav", text: "Fifth Text" },
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
        {this.state.students.map((item, index) => {
          return (
            <NameCard
              key={item.id}
              del={() => this.deleteNameHandler(index)}
              change={this.changeNameHandler}
              name={item.name}
              text={item.text}
            ></NameCard>
          );
        })}
        <button onClick={() => this.nameHandler("Rajat")}>Change Name</button>
        <button onClick={this.nameHandler.bind(this, "Satish")}>
          Change Name
        </button>
      </div>
    );
  }
}

export default ClassComponent;
