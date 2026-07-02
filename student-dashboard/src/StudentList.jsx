import StudentCard from "./StudentCard"
export default function StudentList({students, deleteStudent}){

  return(
    <div>
      {students.map((student)=>(
        <StudentCard key = {student.id} student={student} deleteStudent={deleteStudent}/>
      ))}
    </div>

  )
}