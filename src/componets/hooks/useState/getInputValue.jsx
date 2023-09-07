import React, { useState } from "react";

export const GetInputValue = () => {
  const [value, setValue] = useState("");
  const change = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={change} />
      <h1>{value}</h1>
    </div>
  );
};
