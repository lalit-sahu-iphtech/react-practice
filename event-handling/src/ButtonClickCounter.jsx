import {useState} from "react"
export default function ButtonClickCounter(){
  let[count, setCount] = useState(0);

  let handleClcik = ()=>{
    setCount(count+1);
  }

  return(
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>click</button>
    </div>
  )
}