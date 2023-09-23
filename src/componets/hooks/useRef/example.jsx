import React, { useEffect, useRef, useState } from "react";

export const UseCase = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const buttonRef = useRef();
  const click = () => {
    console.log(buttonRef.current);
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "green";
    buttonRef.current.style.backgroundColor = "red";
  };
  const change = () => {
    setValue(inputRef.current.value);
  };
  return (
    <div>
      <input type="text" ref={inputRef} onChange={change} />
      {value}
      <br />
      <button onClick={click} ref={buttonRef}>
        click
      </button>
    </div>
  );
};
