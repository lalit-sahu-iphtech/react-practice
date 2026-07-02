import {useState} from "react";

export default function PracticeUseState(){
   // 1. COUNTER APP
  // Basic state + Functional Update
  let[count, setCount] = useState(0);

  function increaseCount(){
    setCount((prev)=>prev + 1);
  }
   function decreaseCount(){
    setCount((prev)=>prev - 1);
  }

  // 2. TODO APP
  // Array State + Add + Delete + map + filter
 let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);

  function handleTodo(event) {
    setTodo(event.target.value);
  }

  function addTodo() {
    if (todo !== "") {
      setTodos([
        ...todos,
        todo
      ]);
      setTodo("");
    }
  }

  function deleteTodo(index) {
    setTodos(
      todos.filter((_, i) => i !== index)
    );
  }

 // 3. SHOPPING CART QUANTITY
  // Functional Update
  // Quantity increase/decrease

 let [qty, setQty] = useState(1);

  function increaseQty() {
    setQty((prev) => prev + 1);
  }

  function decreaseQty() {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  }
  // 4. STUDENT LIST
  // Array State + Add + Delete
  let [studentName, setStudentName] = useState("");
  let [students, setStudents] = useState([
    "Rahul",
    "Aman"
  ]);

  function handleStudent(event) {
    setStudentName(event.target.value);
  }

  function addStudent() {
    if (studentName !== "") {
      setStudents([
        ...students,
        studentName
      ]);
      setStudentName("");
    }
  }

  function deleteStudent(index) {
    setStudents(
      students.filter((_, i) => i !== index)
    );
  }



 return (
    <div>

      <h1>useState Practice</h1>

     
      {/* 1. COUNTER APP */}
      

      <h2>1. Counter App</h2>

      <p>Count : {count}</p>

      <button onClick={increaseCount}>
        Increase
      </button>

      <button onClick={decreaseCount}>
        Decrease
      </button>

      <hr />


      {/* 2. TODO APP */}

      <h2>2. Todo App</h2>

      <input
        type="text"
        placeholder="Enter Todo"
        value={todo}
        onChange={handleTodo}
      />

      <button onClick={addTodo}>
        Add Todo
      </button>

      {
        todos.map((item, index) => (
          <div key={index}>
            <p>{item}</p>

            <button
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </div>
        ))
      }

      <hr />


      {/* 3. SHOPPING CART QUANTITY */}

      <h2>3. Shopping Cart Quantity</h2>

      <p>Quantity : {qty}</p>

      <button onClick={increaseQty}>
        +
      </button>

      <button onClick={decreaseQty}>
        -
      </button>

      <hr />


      {/* 4. STUDENT LIST */}

      <h2>4. Student List</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={studentName}
        onChange={handleStudent}
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      {
        students.map((student, index) => (
          <div key={index}>
            <p>{student}</p>

            <button
              onClick={() => deleteStudent(index)}
            >
              Delete
            </button>
          </div>
        ))
      }

      <hr />

    </div>
  );

}