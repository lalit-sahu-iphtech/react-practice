import {useState} from "react";

export default function DarkLightMode(){
  let[dark, setDark] = useState(false);

  let handleDark = () =>{
    setDark(!dark);
  }

  return(
     <div style={{
      backgroundColor:dark?"black":"white",
      color:dark?"white":"black",
      height:"100vh"
      }}>

      <button onClick={handleDark}>{dark?"Light Mode" : "Dark Mode"}</button>
     </div>
  )
}