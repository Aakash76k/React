import { useState } from "react";
import React from "react";

function Decrement() {

  const [count, setCount] = useState(0);

  return (
    <>

    <div className="w-40 h-40 border-4 border-sky-500">
       <h1 className="bg-red-50 border-black">{count}</h1>
       <button className="px-6 py-2 bg-red-100 border-2 border-indigo-600 rounded-lg shadow-xl" onClick={() => setCount(count -1)}>
        Decrement
      </button>
    </div>

      

      
    </>
  );
}

export default Decrement;