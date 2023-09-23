import React, { useCallback, useMemo, useState } from "react";

export const UseCase1 = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
 const val=  useMemo(()=>{
    for (let i = 0; i < 100000; i++) {
        console.log(i)
    }
    return counter1 * 2;
  },[counter1])
 
//   const calculatedValue=val()
  return (
    <div>
      <h1>counter 1 : {counter1}</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>increment 1</button>
      <p> complex calculation {val}</p>

      <br />
      
      <h1>counter 2 : {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>increment 2</button>
    </div>
  );
};
