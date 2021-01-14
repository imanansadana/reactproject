import React from "react";
import MockData from "../../MockData";

const NameDetails = (props) => {
  console.log(props);
  const item = MockData.students.find(
    (item) => item.id === props.match.params.id
  );
  return (
    <div>
      <h1>{item.name}</h1>
      <h4>{item.text}</h4>
    </div>
  );
};

export default NameDetails;
