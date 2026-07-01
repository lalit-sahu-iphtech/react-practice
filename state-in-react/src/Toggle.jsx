import { useState } from "react";

export default function Toggle(){

  let [status, setStatus] = useState(false);

  let toggleBtn = () =>{
    setStatus(!status);
  }

  return(
    <div>

      <h2>
        {status ? "ON" : "OFF"}
      </h2>

      <button onClick={toggleBtn}>
        Toggle
      </button>

    </div>
  )
}