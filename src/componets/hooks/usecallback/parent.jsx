import React, {useCallback, useState } from "react";
import ChildElement from "./child";

export const ParentElement = () => {
  const [counter1, setCounter1] = useState(0);

  const click=useCallback(()=>{
    console.log("hukjmn")
  },[])


//   const click=()=>{

//   }
 
  return (
    <div>
      <h1>counter : {counter1}</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>increment </button>
      <br />
      <br />
      <br />
      <ChildElement  click={click}/>
    </div>
  );
};
