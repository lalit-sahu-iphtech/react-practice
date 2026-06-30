
//------ conditional rendering-if..else----->

import './App.css'
function App() {
  let marks = 40;
  if(marks >= 33){
    return <h2>You are Pass</h2>
  }else{
    return <h2>You are fail</h2>
  }
  
}

//----Ternary Operator ? :----Logical &&----->
import './App.css'
function App() {
  let marks = 40;
  let isLoggedIn = true;
  return(
    <>
      {isLoggedIn && <h2>Welcome User</h2>}
      <h2>{marks >= 33 ? "pass" : "fail"}</h2>
    </>
  )
  
}

export default App
