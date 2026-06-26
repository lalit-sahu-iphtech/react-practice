// function App(){
//   return (
//     <div>
//       <h1>Hello React !</h1>
//       <p>This is my first react Application </p>

//     </div>
//   )
// }
// export default App;

//<----------component------------>

// function Welcome(){
//   return <h2>welcome to react</h2>
// }
// function App(){
//   return <Welcome/>
// }

// export default App;
//<----------component------------>


// ------props------------>

// function Student(props){
//   return <h2>Name:{props.name}</h2>
// }

// function App(){
//   return <Student name="Rahul"/>
// }
// export default App;

//----------state---------->
// import { useState } from "react"; 
// function App(){
//   const[count, setCount] = useState(0);
//   return(
//   <>
//   <h1>{count}</h1>
//   <button onClick={()=> setCount(count + 1)}>Increment</button>
//   </>
//   );
// }
// export default App;

//-------Event Handling------>
// function App(){
//   function handleClick(){
//     alert("Button Click");
//   }
//   return (
//     <button onClick={handleClick}>Click me</button>
//   );
// }
// export default App;

// -----------To-Do-List------------->
// import { useState } from "react";
// import "./App.css";

// function App(){

//   const[task, setTask] = useState("");
//   const[tasks, setTasks] = useState([]);

//   const addTask = () =>{
//     if(task.trim() === "") return;
//     setTasks([...tasks, task]);
//     setTask("");
//   };
//   const deleteTask=(index)=>{
//     const updatedTasks = tasks.filter((_, i) => i != index);
//     setTasks(updatedTasks);
//   }

//   return(
//        <div className="container">
//         <h1>📝 To-Do List</h1>
      
//        <div className="input-box">
//         <input 
//         type="text"
//         placeholder="Enter a Task..."
//         value={task}
//         onChange={(e)=>setTask(e.target.value)}/>

//         <button 
//         onClick={addTask}>Add Task</button>

//        </div>
//        <ul>
//         {tasks.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button
//               className="delete-btn"
//               onClick={() => deleteTask(index)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//        </div>
//   )
// }

// creating product card 
// import ProductTab from "./ProductTab";
import "./App.css";
// function App(){
//   return(
//     <>
//       <h1 className="title">Mobile Store</h1>
//     <ProductTab/>
//     </>
//   );
//}
// import LikeButton from "./LikeButton.jsx";
// function App(){
//   return(
//     <>
//       <h1 >State in React</h1>
//     <LikeButton/>
//     </>
//   );
// }
import Button from "./Button.jsx";
function App(){
  return(
    <>
      <h1 >State in React</h1>
    <Button/>
    </>
  );
}
export default App;









































