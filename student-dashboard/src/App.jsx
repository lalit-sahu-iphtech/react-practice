import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import Footer from "./Footer";
import "./App.css";

function App() {

  let [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul",
      rollNo: "101",
      college: "ABC College",
      city: "Delhi",
      skills: ["React", "JavaScript"],
      hobbies: ["Cricket", "Music"],
      active: true
    }
  ]);

  let [search, setSearch] = useState("");

  // Add Student
  let addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  // Delete Student
  let deleteStudent = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  // Search Student
  let filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <Header />

      <Sidebar />

      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Total Students : {students.length}</h2>

      <StudentForm addStudent={addStudent} />

      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
      />

      <Footer />

    </div>
  );
}

export default App;