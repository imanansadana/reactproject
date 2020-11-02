import React, { Component } from 'react'
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
  
    const people = [
      { name: 'John' },
      { name: 'Jake' }
    ];
     const people2 = [
      { id: 1, name: 'Chris' },
      { id: 2, name: 'Nick' } //If each item in your array has a unique identifier, then we can use that
    ];

    return (
      <div className = "App">
        <h1>Hi, my name is {this.name}</h1>
        <h3>I know how to program in {this.skills}.</h3>
        <p classname= "topics">and this is my first {this.concepts.language} project using {this.concepts.topic}</p>
        <p>{this.learning()} </p>
        <div className="list1">
        {people.map(person => (
          <p>{person.name}</p>         //we can directly map through the array to create a list but this is not preferable when working on a real application
        ))}
      </div>
       <div className="list2">
       {people2.map(person => (
        <p key={person.id}>{person.name}</p>     
      ))}
  </div>


      </div>
    )
  }
}

export default App;
