import {useState} from "react";

export default function Login(){
  let[isLogin, setIsLogin] = useState(false);

  let handleLogin =  () =>{
    setIsLogin(!isLogin);
  }

  return(
    <div>
      <h2>{isLogin ? "Welcome User" : "Please Login"}</h2>
      <button onClick={handleLogin}>{isLogin ? "Logout" : "Login"}</button>
    </div>
  )
}