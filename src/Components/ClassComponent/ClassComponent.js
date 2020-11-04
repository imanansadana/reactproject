import React, { Component } from 'react'
import Card from '../Cards/card';

export class ClassComponent extends Component {
   

    render() {
        return (
            <div>
            <Card  name= "manan" skills = "JS, React" learning = {() =>{
              return "We will be learning more about react libraries!"
            }}></Card>
            </div>
        )
    }
}

export default ClassComponent
