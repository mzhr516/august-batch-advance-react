import React, { memo } from "react";

const ChildElement = ({click}) => {
  console.log("child render");
  return (
    <div>
      <button onClick={click}>dummy</button>
    </div>
  );
};
export default memo(ChildElement);
