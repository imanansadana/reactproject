import React, { Component } from 'react'
import "./App.css"
import ClassComponent from './Components/ClassComponent/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent/FunctionalComponent.js';

class App extends Component { 
  
  
  render() {


    return (
      <div className = "App">         
  <ClassComponent></ClassComponent>
  <FunctionalComponent></FunctionalComponent>
      </div>
    )
  }
}

export default App;
