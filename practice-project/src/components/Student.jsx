
export default function Student({data}){
  return(
    <div className="card">
      <p>Name : {data.name}</p>
      <p>Roll No : {data.rollNo}</p>
       <p>College : {data.college}</p>
      <p>City : {data.city}</p>

      <h3>Skills</h3>
      <ul>
        {data.skills.map((skill,idx) =>{
          <li key={idx}>{skill}</li>
        })}
      </ul>

      <h3>Hobbies</h3>
      <ul>
        {data.hobbies.map((hobby, idx) =>{
          <li key={idx}>{hobby}</li>
        })}
      </ul>

      <p>
        Status : {data.isActive?"Active Student":"Inactive Student"}
      </p>
     
    </div>
  )
}