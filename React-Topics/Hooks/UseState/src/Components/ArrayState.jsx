import React from "react";
import {useState} from "react";

function ArrayState(){
    const [fruits, setfruits] = useState([
        "Apple",
        "Mango",
        "Banana"
    ]);
    return(
        <>
        {/* <h1>{fruits}</h1> */}
        {
            fruits.map((item,index)=>(
                <h2 key={index}>{item}</h2>
            ))
        }
        </>
    );
};

export default ArrayState;