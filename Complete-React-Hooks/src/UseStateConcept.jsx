import { useState } from "react";

export default function UseStateConcept() {

  // =========================================================
  // 1. CREATING STATE
  // State ka basic use → single value store karna
  // =========================================================

  let [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }


  // =========================================================
  // 2. MULTIPLE STATES
  // Ek component me multiple independent values store karna
  // =========================================================

  let [name, setName] = useState("Lalit");
  let [age, setAge] = useState(22);

  function changeUser() {
    setName("Rahul");
    setAge(25);
  }


  // =========================================================
  // 3. OBJECT STATE
  // Related data ko ek object ke andar store karna
  // Example → Student / Employee / Form Data
  // Spread Operator use karna important hai
  // =========================================================

  let [student, setStudent] = useState({
    name: "Aman",
    city: "Lucknow",
    college: "LU"
  });

  function updateStudent() {
    setStudent({
      ...student,           // old data preserve
      city: "Delhi"        // only city update
    });
  }


  // =========================================================
  // 4. ARRAY STATE
  // Jab list of items store karni ho
  // Example → Todo List / Students / Products
  // =========================================================

  let [students, setStudents] = useState([
    "Rahul",
    "Aman"
  ]);

  function addStudent() {
    setStudents([
      ...students,        // old array copy
      "Lalit"            // new item add
    ]);
  }

  function deleteStudent() {
    setStudents(
      students.filter(
        (student) => student !== "Rahul"
      )
    );
  }


  // =========================================================
  // 5. FUNCTIONAL UPDATE
  // Jab new state old state pe depend kare
  // prev = previous value
  // =========================================================

  let [likes, setLikes] = useState(0);

  function increaseLikes() {
    setLikes((prev) => prev + 1);
  }


  // =========================================================
  // 6. LAZY INITIALIZATION
  // Expensive function sirf first render pe run hota hai
  // Function inside useState
  // =========================================================

  function getInitialValue() {
    console.log("Heavy Function Running...");
    return 100;
  }

  let [score, setScore] = useState(() => getInitialValue());

  function increaseScore() {
    setScore(score + 10);
  }


  return (
    <div>

      <h1>useState Revision</h1>

      {/* ================================================= */}
      {/* 1. CREATING STATE */}
      {/* ================================================= */}

      <h2>1. Creating State</h2>

      <p>Count : {count}</p>

      <button onClick={increaseCount}>
        Increase Count
      </button>

      <hr />


      {/* ================================================= */}
      {/* 2. MULTIPLE STATES */}
      {/* ================================================= */}

      <h2>2. Multiple States</h2>

      <p>Name : {name}</p>
      <p>Age : {age}</p>

      <button onClick={changeUser}>
        Change User
      </button>

      <hr />


      {/* ================================================= */}
      {/* 3. OBJECT STATE */}
      {/* ================================================= */}

      <h2>3. Object State</h2>

      <p>Name : {student.name}</p>
      <p>City : {student.city}</p>
      <p>College : {student.college}</p>

      <button onClick={updateStudent}>
        Update City
      </button>

      <hr />


      {/* ================================================= */}
      {/* 4. ARRAY STATE */}
      {/* ================================================= */}

      <h2>4. Array State</h2>

      {
        students.map((student, index) => (
          <li key={index}>{student}</li>
        ))
      }

      <button onClick={addStudent}>
        Add Student
      </button>

      <button onClick={deleteStudent}>
        Delete Rahul
      </button>

      <hr />


      {/* ================================================= */}
      {/* 5. FUNCTIONAL UPDATE */}
      {/* ================================================= */}

      <h2>5. Functional Update</h2>

      <p>Likes : {likes}</p>

      <button onClick={increaseLikes}>
        Like 👍
      </button>

      <hr />


      {/* ================================================= */}
      {/* 6. LAZY INITIALIZATION */}
      {/* ================================================= */}

      <h2>6. Lazy Initialization</h2>

      <p>Score : {score}</p>

      <button onClick={increaseScore}>
        Increase Score
      </button>

      <hr />

    </div>
  );
}