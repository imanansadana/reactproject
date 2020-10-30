import React, { useState, useEffect } from "react";

const FunctionalHooks = () => {
  var buttons = [
    { content: "Tab-1", tab: 1 },
    { content: "Tab-2", tab: 2 },
    { content: "Tab-3", tab: 3 },
  ];

  const [activetab, changetab] = useState(1);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div>
      <h1>We are using useState and useEffect here</h1>
      {buttons.map((btn) => {
        return (
          <button
            key={btn.tab}
            onClick={() => {
              changetab(btn.tab);
            }}
          >
            {btn.content}
          </button>
        );
      })}

      <h1>{activetab}</h1>
    </div>
  );
};

export default FunctionalHooks;
