import {useState} from "react";
import {v4 as uuidv4} from 'uuid';

import "./TodoApp.css"
export default function TodoApp(){
  let [todos, setTodos] = useState([{task:"sample-task", id :uuidv4}]);
  let[newTodo, setNewTodo] = useState("");

  let addNewTask = () =>{
    setTodos((prevTodos) =>{
      return [...prevTodos, {task : newTodo, id:uuidv4()}]
    });
    setNewTodo(""); // empty input box
  }
  let updateTodoValue = (event)=>{
    setNewTodo(event.target.value);
  }
  let deleteTodo = (id) =>{
  setTodos((prevTodo) =>{
    return prevTodo.filter((prevTodo) => prevTodo.id != id)
  });
  }
  let upperCaseAll = () =>{
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>{
      return{
        ...todo, task:todo.task.toUpperCase()
      };
    })
    );
  }
    let upperCaseOne = (id) =>{
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>{
        if(todo.id == id){
      return{
        ...todo, task:todo.task.toUpperCase()
      };
    }else{
      return todo;
    }
    })
    );
  }

  
  return( 
    <div>
      <input 
      type="text"
      placeholder="enter our task..."
      value={newTodo} 
      onChange={updateTodoValue}
      />
      &nbsp; &nbsp; 
      <button onClick={addNewTask}>Add Task</button>
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <hr />
      <h4>Todo Tasks</h4>
      <ul>
        {
          todos.map((todo) =>(
            <li key={todo.id}>
              <span>{todo.task}</span>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => deleteTodo(todo.id)}>delete</button>
              &nbsp;&nbsp;
                <button onClick={() => upperCaseOne(todo.id)}>upperCaseOne</button>
              </li>
          ))
        }
      </ul>
      <button onClick={upperCaseAll}>To UpperCase All</button>
    </div>
  )
}