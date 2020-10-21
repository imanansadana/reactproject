import React, { useState } from "react";

const FunctionalComponent = () => {
  var [counter, changeCounter] = useState(1);
  var [anotherCounter, anotherChangeCounter] = useState({
    students: [
      { name: "Manan", text: "First Text" },
      { name: "Rajat", text: "Second Text" },
      { name: "Ashish", text: "Third Text" },
      { name: "Madhav", text: "Fifth Text" },
    ],
    otherVar: 1,
  });

  var changeState = () => {
    anotherChangeCounter({
      students: [
        { name: "Manan", text: "First Text" },
        { name: "Satish", text: "Second Text" },
        { name: "Ashish", text: "Third Text" },
        { name: "Madhav", text: "EIgth Text" },
      ],
    });
    console.log(anotherCounter);
  };

  var fun = () => {
    changeCounter(++counter);
    console.log(counter);
  };

  return (
    <div>
      {counter === 1 ? <h1>One</h1> : <h2>More than One</h2>}
      <h2>Number {counter}</h2>
      <p>Changing and using state with this one</p>
      <button onClick={fun}>Add Number</button>
      <p>Just changing the state with this button, not using it</p>
      <button onClick={changeState}>Changing State</button>
    </div>
  );
};

export default FunctionalComponent;
