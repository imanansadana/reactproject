import React, { Component } from 'react'
import "./App.css"
import ClassComponent from './ClassComponent/ClassComponent';
import List from './FunctionalComponent/FunctionalComponent';

class App extends Component { 
  
  
  render() {


    return (
      <div className = "App">         
  <ClassComponent></ClassComponent>
  <List></List>
      </div>
    )
  }
}

export default App;
