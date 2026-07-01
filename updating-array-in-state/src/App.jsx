import { useState } from "react";

export default function StudentList(){

  let [students, setStudents] = useState([
    "Lalit",
    "Rahul",
    "Aman"
  ]);

  // Add Student
  let addStudent = ()=>{

    setStudents([
      ...students,
      "Rohit"
    ]);

  };

  // Delete Student
  let deleteStudent = ()=>{

    setStudents(
      students.filter(
        (student)=>
          student !== "Rahul"
      )
    );

  };

  // Update Student
  let updateStudent = ()=>{

    setStudents(
      students.map((student)=>

        student === "Aman"
          ? "Ankit"
          : student

      )
    );

  };

  return(
    <div>

      <h2>Student List</h2>

      {
        students.map((student,index)=>(
          <li key={index}>
            {student}
          </li>
        ))
      }

      <br />

      <button onClick={addStudent}>
        Add Student
      </button>

      <button onClick={deleteStudent}>
        Delete Student
      </button>

      <button onClick={updateStudent}>
        Update Student
      </button>

    </div>
  )
}