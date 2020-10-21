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
      {counter === 1 ? <h1>One</h1> : <h2>Two</h2>}
      <button onClick={changeState}>Click Me</button>
      <button onClick={fun}>Click Me</button>
    </div>
  );
};

export default FunctionalComponent;
