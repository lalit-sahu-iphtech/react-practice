import { useState } from "react";

// value update on render stage
// setCount(count+1); not update by only call this method
// function Counter(){
//     let[count, setCount] = useState(0);// this line only for initlization

//     console.log("component is rerenderd");
//     console.log(`count = ${count}`);


//     let increment = () =>{
//     setCount(count+1);
//     console.log(`inside increment count = ${count}`);
    
//     }
//     let decrement = () =>{
//       setCount(count-1);
//       console.log(`inside increment count = ${count}`);
      
//       }
//   return(
//     <div>
//     <h4>count = {count}</h4>
//     <button onClick={increment}>Increment count</button>
//    <button onClick={decrement}>Decrement count</button>
//     </div>
//   )
// }

function Counter(){
  let[count, setCount] = useState(0);



  let handleClick = (operator) =>{
    if(operator === "+"){
      setCount(count+1);
    }else if(operator === "-"){
  
      setCount(count-1);
    }
  
  }
  
return(
  <div>
  <h4>count = {count}</h4>
  <button onClick={()=>handleClick("+")}>Increment count</button>
 <button onClick={()=>handleClick("-")}>Decrement count</button>
  </div>
)
}
export default Counter;