import React, { useEffect, useRef, useState } from "react";

export const UseCase2 = (props) => {
  const [counter, setCounter] = useState(0);
//   const [prev,setPrev]=useState(null)
  const prev = useRef(null);

  useEffect(()=>{
    prev.current=counter
    // setPrev(counter)
  },[counter])


  const click = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>value : {counter}</h1>
      <h3>prev Value :{prev.current} </h3>
      <button onClick={click}>increment</button>
    </div>
  );
};
