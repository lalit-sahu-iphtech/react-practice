import {useState} from "react"

export default function Toggle(){
  let[show, setShow] = useState(false);

  let handleToggle = () =>{
    setShow(!show);
  }
  return (
    <div>
      <p>
        {
          show?"React is a JavaScript library used for building user interfaces.":
          "React is a JavaScript library..."
        }
      </p>
      <button onClick={handleToggle}>{show?"show Less" : "show More"}</button>
    </div>
  )
}