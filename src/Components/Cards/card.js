import React from 'react'

function Card(props) {
    return (
        <div>
        <h1>Hi, my name is {props.name}</h1>
        <h3>I know how to program in {props.skills}.</h3>
        <p>{props.learning} </p>
        </div>
    )
}

export default Card;
