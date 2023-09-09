import React, { useState } from "react";

export const GetValue = () => {

  const [value, setValue] = useState("");
  const [printValue, setPrintValue] = useState("");
  console.log("hello")
  const change = (e) => {
    const val = e.target.value;
    setValue(val);
  };

  const click = () => {
    setPrintValue(value);
  };

  return (
    <div>
      <input type="text" onChange={change} />
      <br />
      <button onClick={click}>get value</button>
      <h1>{printValue}</h1>
    </div>
  );
};
