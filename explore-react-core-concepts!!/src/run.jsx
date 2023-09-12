import { useState } from "react";

export default function Run(){
    const [run, setRun]= useState(0);

  const addRun =()=>{
   const newRun = run + 1;
    setRun(newRun);
  }
 
  const removeRun =()=>{
   setRun(run-1);
  }



    return(
        <div>
            <h3>Runs : {run}</h3>
            <button onClick={addRun}> ADD </button>
            <button onClick={removeRun}> REMOVE </button>
        </div>
    )
}