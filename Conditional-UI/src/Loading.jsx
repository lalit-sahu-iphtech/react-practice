import {useState} from "react";

export default function Loading(){
  let[loading, setLoading] = useState(false);

  let handleLoading = () =>{
         setLoading(true);

         setTimeOut(()=>{
          setLoading(false);
         },2000)
  }
  return (
    <div>
      <button onClick = {handleLoading}>Load Data</button>
      <h2>{loading?"Loading...":"Data Loaded"}</h2>
    </div>
  )
}