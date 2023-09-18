import React, { useEffect } from "react";

export const Child = (props) => {
  useEffect(() => {

    // clean up function...
    return () => {
      console.log("component unmounted");
    };

  }, []);
  return <div>Child</div>;
};
