import { useState } from "react";
// -----counter app--------->
export default function Counter(){
  let [count, setCount] = useState(0);
  let increase = () =>{
    setCount(count + 1);
  }

  return(
    <div>
      <h1>{count}</h1>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  )
}

