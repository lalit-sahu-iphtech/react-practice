 import {useState} from "react";
 export default function HandleClick(){
    let [name, setName] = useState("");

    let handleChange = (event) =>{
    setName(event.target.value);
  }

  let handleSubmit = (event)=>{
    event.preventDefault();

    alert("Form Submitted");
  }
 let handleBlur = ()=>{
    console.log("Input Lost Focus");
  }
  let handleFocus = ()=>{
    console.log("Input Focused");
  }
  function handleClick(){
    console.log("Button Clicked");
  
  }

  return(
    <div>
     <form onSubmit={handleSubmit}>
    
       <input
        type="text"
        onChange={handleChange}
      />
       <input
        type="text"
        onBlur={handleBlur}
      />
      <input
        type="text"
        onFocus={handleFocus}
      />

      <h2>{name}</h2>

       <button onClick={handleClick} >
      Click Me
    </button>
     </form>
     
    </div>
    
  )
}