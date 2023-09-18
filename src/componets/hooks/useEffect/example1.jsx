import React, { useEffect, useState } from "react";

export const Example1 = () => {
  const [count, setCount] = useState(0);
  const [reRender, setReRender] = useState(0);

  useEffect(() => {
    setReRender(reRender + 1);
  },[count]);
  
  return (
    <div>
      <h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button>
      </h1>
      <p>re-render count : {reRender}</p>
    </div>
  );
};
