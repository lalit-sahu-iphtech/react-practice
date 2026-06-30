//----map()--->
import './App.css'
function App() {
  let students = ["Lalit", "Harshit", "Manmeet"];
  return (
    <>
    {students.map((student) =>{
      return <h2>{student}</h2>
    })}
      
    </>
  )
}

// ----key Prop---->
function App() {
  let students = ["Lalit", "Harshit", "Manmeet"];
  return (
    <>
    {students.map((student, idx) =>{
      return <h2 key={idx}>{student}</h2>
    })}
      
    </>
  )
}

//--------Employee List------->
import EmployeeList from "./EmployeeList"
function App() {
  return (
    <>
      <EmployeeList/>
    </>
  )
}

export default App
