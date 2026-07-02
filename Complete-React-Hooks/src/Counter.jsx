// --------class component-------->

import React from "react";

class Counter extends React.Component{
  construtor(){
    super();

    this.state = {
      count : 0
    }
  }
  render(){
    return(
      <h1>{this.state.count}</h1>
    )
  }
}
export default Counter;

//-----functional component---------->
import {useState} from "react";
export default function Counter(){
  let[count, setCount] = useState(0);

  return(
    <h1>{count}</h1>
  )
}