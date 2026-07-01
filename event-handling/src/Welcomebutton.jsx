import { useState } from "react";
export default function Welcomebutton(){
 let[msg, setMsg] = useState("");
 

 let handleClick = ()=>{
  setMsg("welcme Lalit");
 }
 return(
  <div>
    <button onClick={handleClick}>welcome</button>
    <h2>{msg}</h2>
  </div>
 )
}