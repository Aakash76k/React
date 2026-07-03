import React from "react";
import { useState } from "react";

function ObjectState() {
  const [user, setUser] = useState({
    name: "Aakash",
    age: 21,
  });
  return (
    <>
      <h1>Name: {user.name}</h1>
      <h2>Age: {user.age}</h2>

      <button
        onClick={() =>
          setUser({
            ...user,
            age: 22,
          })
        }
      >
        Change Age
      </button>
    </>
  );
}

export default ObjectState;
