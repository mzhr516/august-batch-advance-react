import React, { useEffect, useState } from "react";
import { Child } from "./chils";

export const Parent = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);



  
  useEffect(()=>{
    document.title = "tekisky";
    console.log("hello")
  },[])


  useEffect(() => {
    // console.log("called");
    setCalculation(count * 2);
  }, [count]);

  const click = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={click}>{count}</button>
      <h1>claculation : {calculation}</h1>
    </div>
  );
};
