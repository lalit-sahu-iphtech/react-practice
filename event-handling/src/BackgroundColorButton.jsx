import {useState} from "react"

export default function BackgroundColorButton(){
  let[color, setColor] = useState("white");

  let changeColor =()=>{
    setColor("red");
  }
  return(
    <div style={{backgroundColor:color,height:"100vh"}}>
      <button onClick={changeColor}>change color
      </button>
    </div>
  )
}