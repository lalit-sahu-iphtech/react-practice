
import {useState} from "react";

export default function User(){
  let[user, setuser] = useState({
    name:"Lalit",
    age:20
  })

  let changeName = () =>{
    setUser({...user, name:"Rahul"})
  }
  return(
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <button onClick = {changeName}>Change</button>

    </div>
  )
}