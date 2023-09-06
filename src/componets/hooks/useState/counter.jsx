import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  
  function click() {
    setCount(count+1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={click}>increment +</button>
      <button>decrement -</button>
    </div>
  );
};
