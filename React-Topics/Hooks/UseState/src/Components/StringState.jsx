import React from "react";
import { useState } from "react";

function StringState() {
  const [name, setName] = useState("Aakash");
  return (
    <>
      <div className="w-40 h-40 border-4 border-sky-500">
        <h1 className="bg-red-50 border-black">{name}</h1>
        <button
          className="px-6 py-2 bg-red-100 border-2 border-indigo-600 rounded-lg shadow-xl"
          onClick={() => setName("Shivam")}
        >
          Change Name
        </button>
      </div>
    </>
  );
}

export default StringState;
