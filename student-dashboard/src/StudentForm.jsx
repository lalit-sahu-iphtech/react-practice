import {useState} from "react";

export default function StudentForm({addStudent}){
  let[formData, setFormData] = useState({
    name:"",
    rollNo:"",
    college:"",
    city:"",
    skills:"",
    hobbies:"",
    active:true
  })
  // let handleChange = () =>{
  //    let{name, value} = event.target;
  //    setFormData((currData) =>({
  //     ...currData, [name]:value
  //    }))
  // } 
  let handleChange = (event) => {
  setFormData((currData) => ({
    ...currData,
    [event.target.name]: event.target.value
  }));
};

  let handleSubmit = (event) =>{
    event.preventDefault();

  let newStudent = {
      id: Date.now(),
      name: formData.name,
      rollNo: formData.rollNo,
      college: formData.college,
      city: formData.city,
      skills: formData.skills.split(","),
      hobbies: formData.hobbies.split(","),
      active: formData.active
    };

    addStudent(newStudent);

    setFormData({
      name: "",
      rollNo: "",
      college: "",
      city: "",
      skills: "",
      hobbies: "",
      active: true
    });

  }

  return(
  <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="rollNo"
        placeholder="Roll No"
        value={formData.rollNo}
        onChange={handleChange}
      />

      <input
        type="text"
        name="college"
        placeholder="College"
        value={formData.college}
        onChange={handleChange}
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />

      <input
        type="text"
        name="skills"
        placeholder="Skills comma separated"
        value={formData.skills}
        onChange={handleChange}
      />

      <input
        type="text"
        name="hobbies"
        placeholder="Hobbies comma separated"
        value={formData.hobbies}
        onChange={handleChange}
      />

      <button>Add Student</button>

      <hr />

      <h3>Live Preview</h3>
      <p>{formData.name}</p>
      <p>{formData.college}</p>

    </form>

  )
}