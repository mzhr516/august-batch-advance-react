import React, { useState } from "react";

export const AddRectangle = () => {
  const [rectangle, setRectangle] = useState([""]);
  console.log(rectangle);
  const onAdd = () => {
    setRectangle([...rectangle, ""]);
  };

  return (
    <div>
      {rectangle.map(() => {
        return (
          <div
            style={{
              width: "250px",
              height: "150px",
              backgroundColor: "red",
              marginBottom: "5px",
            }}
          ></div>
        );
      })}

      <br />
      {rectangle.length < 5 && <button onClick={onAdd}>Add</button>}
    </div>
  );
};
