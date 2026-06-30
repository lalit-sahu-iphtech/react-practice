import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Student from "./components/Student";
import Employee from "./components/Employee";
import Footer from "./components/Footer";
function App(){
  const studentData = {
    name: "Lalit",
    rollNo: 101,
    college: "University of Lucknow",
    city: "Lucknow",
    skills: ["Java", "React", "Node.js", "SQL"],
    hobbies: ["Coding", "Cricket", "Music"],
    isActive: true
  };
  return(
    <>
    <Header/>
    <Navbar/>
    <Student data={studentData}/>
    <Employee/>
    <Footer/>
    </>
  )
}
export default App