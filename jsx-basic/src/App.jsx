
// ----jsx deep dive, className, External CSS, InLine CSS, Image in jsx, fragment-------->
import './App.css'
import hero from "./assets/hero.png"
function App() {
  let name = "Lalit";
  let marks = 85;

  return (
    <>
     <h2 className="heading">name = {name}</h2>
     <p style={{color:"pink"}}>Your Marks : {marks}</p>
     <p style={{backgroundColor:"red",color:"black"}}>next year age : {19 + 1}</p>
     <img src={hero} alt="hero" />
    </>
  )
}

export default App
