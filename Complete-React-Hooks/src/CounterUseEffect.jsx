import {useState, useEffect} from "react";

export default function CounterUseEffect(){
  let[count, setCount] = useState(0);

  let incrementCount = () =>{
    setCount(count + 1);
  }
    let decrementCount = () =>{
      if(count == 0) return;
    setCount(count - 1);
  }

  useEffect(() =>{
      console.log("counter mounted");
      return function () {
        console.log("Unmount Counter");
      }
  },[])

  // empty dep arrays means - whole component
  // it dep has some values

   useEffect(() =>{
      console.log("user updated count", count);

      return () =>{
        console.log("Counter UseEffect Return", count)
      }
  },[count])

  return(
    <div>
      <h3>{count}</h3>
      <button onClick={incrementCount}>+1</button>
      <button onClick={decrementCount}>-1</button>


    </div>
  )
}