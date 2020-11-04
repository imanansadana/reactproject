import React, { Component } from "react";
import "./App.css"

class App extends Component {
  render() {
    name= "manan";
    skills = ["JS, ", "React, ", "HTML, ", "CSS, ", "Node "]
    concepts = {
      language: "React.js",
      topic: "JSX variables"
    }
    learning = () =>{
      return "We will be learning more about react libraries!"
    }
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
