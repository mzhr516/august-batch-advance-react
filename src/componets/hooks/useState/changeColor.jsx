import React, { useState } from "react";

export const ChangeColor = () => {
  const [color, setColor] = useState("pink");

  const onOver = () => {
    setColor("red");
  };
  const onLeave = () => {
    setColor("pink");
  };

  return (
    <div>
      <h1 onMouseOver={onOver} onMouseLeave={onLeave} style={{ color: color }}>
        this is react tutorial
      </h1>
    </div>
  );
};
