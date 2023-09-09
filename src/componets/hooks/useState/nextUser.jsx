import React, { useState } from "react";

export const NextUser = () => {
  const user1 = { name: "mazhar", age: 25, location: "nanded" };
  const user2 = { name: "sohel", age: 20, location: "mumbai" };

  const [user, setUser] = useState(user1);

  const onNext = () => {
    if (user.name === "mazhar") {
      setUser(user2);
    } else {
      setUser(user1);
    }
  };

  return (
    <div>
      <ol>
        <li>my name is {user.name}</li>
        <li>my age is {user.age}</li>
        <li>my hometown is {user.location}</li>
      </ol>
      <button onClick={onNext}>next</button>
    </div>
  );
};
