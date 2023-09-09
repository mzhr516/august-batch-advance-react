import React, { useState } from "react";

export const GetFullName = () => {
    
  const [detail, setDetail] = useState({ name: "Tekisky", address: "Nanded" });

  const click = () => {
    setDetail({ name: "tekisky pvt ltd", address: "work shop corner nanded" });
  };

  return (
    <div>
      <h1>Name: {detail.name}</h1>
      <h1>Address: {detail.address}</h1>
      <button onClick={click}>get Full Name / Address</button>
    </div>
  );
};
