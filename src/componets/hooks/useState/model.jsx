import React from "react";

export const Model = ({ closeModel }) => {
  return (
    <div>
      <div className="model-container">
        <button onClick={closeModel}>close</button>
      </div>
    </div>
  );
};
