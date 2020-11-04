import React, { Component } from 'react'
import Card from '../Cards/card';

export class ClassComponent extends Component {
   

    render() {
        return (
            <div>
            <Card  name= "manan" skills = "JS, React" learning = {() =>{
              return "this is the first card"
            }}></Card>
          
            <Card name= "Vaibhav" skills = "HTML, CSS" learning = {() =>{
              return "This is the second card"
            }}></Card>
            </div>
        )
    }
}

export default ClassComponent
