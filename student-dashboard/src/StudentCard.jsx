export default function StudentCard({
  student,
  deleteStudent
}) {

  return (
    <div>

      <h3>Name: {student.name}</h3>

      <p>Roll No: {student.rollNo}</p>

      <p>College: {student.college}</p>

      <p>City: {student.city}</p>

      <p>
        Status:
        {student.active
          ? " Active"
          : " Inactive"}
      </p>

      <h4>Skills</h4>

      {
        student.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))
      }

      <h4>Hobbies</h4>

      {
        student.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))
      }

      <button
        onClick={() =>
          deleteStudent(student.id)
        }
      >
        Delete
      </button>

      <hr />

    </div>
  );
}