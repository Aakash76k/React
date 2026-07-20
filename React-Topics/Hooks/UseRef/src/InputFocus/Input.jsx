import { useRef} from "react";

const Input = () => {
  

  const inputRef = useRef(null);
  const focusInput= () =>{
    //inputRef.current.value = "Aakash"; // fill name 
    inputRef.current.focus(); // focus input 
    inputRef.current.value = " " ;  // delete
  };
  
  return <>
  
  <div>
    <input type="text" 
    placeholder="name"
    ref = {inputRef}
    />
    <div>
      <button onClick={focusInput}  >
        

        Focus Input
      </button>
    </div>
  </div>
  </>;
};

export default Input;
