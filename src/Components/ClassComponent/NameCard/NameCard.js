import React from "react";
import "./NameCard.css";

const NameCard = (props) => {
  return (
    <div className="namecard">
      <h1>{props.name}</h1>
      <h4>{props.text}</h4>
      <input onChange={props.change} type="text" value={props.name} />
      <button className="deletebtn" onClick={props.del}>
        Delete
      </button>
    </div>
  );
};

export default NameCard;
