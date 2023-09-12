import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  console.log("hii");
  const increment = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>increment +</button>
      <button onClick={decrement}>decrement -</button>
    </div>
  );
};
