import React, { useState } from "react";

export const ShowImage = () => {
  const [visible, setVisible] = useState(false);

  const onShowHide = () => {
    setVisible(!visible);

    // setVisible(visible === true ? false : true);

    // if(visible===true){
    //     setVisible(false)
    // }else{
    //     setVisible(true)
    // }
  };

  return (
    <div>
      {visible === true && (
        <img src="vite.svg" alt="" width={200} height={200} />
      )}

      <br />
      <button onClick={onShowHide}>{visible === true ? "hide" : "show"}</button>
    </div>
  );
};
