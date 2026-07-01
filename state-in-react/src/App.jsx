
// import Counter from "./Counter"
// function App() {
//   return (
//    <>
//    <Counter/>
//    </>
//   )
// }
// export default App

// ------multiple state variables------->
// import { useState } from "react";
// function App() {
//   let [name, setName] = useState("Lalit");
//   let [age, setAge] = useState(21);

//   return (
//    <>
//    <h2>{name}</h2>
//    <h2>{age}</h2>
//    </>
//   )
// }

// -------object state-------->
// import User from "./User"
// function App() {

//   return (
//    <>
//    <User/>
//    </>
//   )
// }

//-------Array state------->
// import Skills from "./Skills"
// function App() {

//   return (
//    <>
//    <Skills/>
//    </>
//   )
// }

//-------toogle button------->
import Password from "./Password"
import Toggle from "./Toggle"
import Like from "./Like"
function App() {

  return (
   <>
   <Toggle/>
   <Password/>
   <Like/>
   </>
  )
}

export default App
