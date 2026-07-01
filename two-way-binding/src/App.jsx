import { useState } from "react";

// export default function App(){

//   let [name, setName] = useState("");

//   let handleChange = (event)=>{
//     setName(event.target.value);
//   }

//   return(
//     <div>

//       <input
//         type="text"
//         value={name}
//         onChange={handleChange}
//       />

//       <h2>{name}</h2>

//     </div>
//   )
// }



export default function ProfileCard(){

  let [profile, setProfile] = useState({
    name: "",
    email: "",
    city: "",
    college: ""
  });

  // Common handleChange
  let handleChange = (event)=>{
    let {name, value} = event.target;

    setProfile((currData)=>({
      ...currData,
      [name]: value
    }));
  };

  return(
    <div>

      <h2>Profile Form</h2>

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={profile.name}
        onChange={handleChange}
      />

      <br /><br />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={profile.email}
        onChange={handleChange}
      />

      <br /><br />

      {/* City */}
      <input
        type="text"
        name="city"
        placeholder="Enter City"
        value={profile.city}
        onChange={handleChange}
      />

      <br /><br />

      {/* College */}
      <input
        type="text"
        name="college"
        placeholder="Enter College"
        value={profile.college}
        onChange={handleChange}
      />

      <hr />

      <h2>Live Profile Card</h2>

      <h3>Name: {profile.name}</h3>

      <h3>Email: {profile.email}</h3>

      <h3>City: {profile.city}</h3>

      <h3>College: {profile.college}</h3>

    </div>
  )
}