import React, { useState } from "react";
import { Model } from "./model";

export const ModelContainer = () => {
  const [show, setShow] = useState(false);
  const openModel = () => {
    setShow(true);
  };
  const closeModel = () => {
    setShow(false);
  };
  return (
    <div>
      <button onClick={openModel}>open model</button>
      {show && <Model closeModel={closeModel}/>}
    </div>
  );
};
