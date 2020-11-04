import React, { Component } from "react";
import "./App.css"

class App extends Component {
  name= "manan";
  skills = ["JS, ", "React, ", "HTML, ", "CSS, ", "Node "]
  concepts = {
    language: "React.js",
    topic: "JSX variables"
  }
  learning = () =>{
    return "We will be learning more about react libraries!"
  }
  render() {
  
    return (
      <div className="App">
      <h1>Hi, my name is {this.name}</h1>
      <h3>I know how to program in {this.skills}.</h3>
      <p classname= "topics">and this is my first {this.concepts.language} project using {this.concepts.topic}</p>
      <p>{this.learning()} </p>
      </div>
    );
  }
}

export default App;
