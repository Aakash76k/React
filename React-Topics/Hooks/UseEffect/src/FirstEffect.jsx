import { useEffect } from "react";

function FirstEffect(){
    useEffect(()=>{
        console.log("Welcome Aakash")
    },[]);
    return (
        <h1>useEffect First Example</h1>
    )
}

export default FirstEffect;