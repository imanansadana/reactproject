import React from "react";
import MockData from "../../MockData";

const NameDetails = (Props) => {
  const item = MockData.students.find(
    (item) => item.id === Props.match.params.id
  );
  return (
    <div>
      <h1>{item.name}</h1>
      <h4>{item.text}</h4>
    </div>
  );
};

export default NameDetails;
