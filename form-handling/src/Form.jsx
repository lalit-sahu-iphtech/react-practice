import { useState } from "react";

export default function Form() {

  let [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
    course: "",
    gender: "",
    skills: []
  });

  // Common Handle Change
  let handleChange = (event) => {
    let { name, value, checked, type } = event.target;

    // Checkbox handle
    if (type === "checkbox") {
      if (checked) {
        setFormData((currData) => ({
          ...currData,
          skills: [...currData.skills, value]
        }));
      } else {
        //Remove Skill using Filter
        setFormData((currData) => ({
          ...currData,
          skills: currData.skills.filter(
            (skill) => skill !== value
          )
        }));
      }
    }

    // Other inputs handle
    else {
      setFormData((currData) => ({
        ...currData,
        [name]: value
      }));
    }
  };

  // Submit
  let handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    alert("Form Submitted");

    handleReset();
  };

  // Reset
  let handleReset = () => {
    setFormData({
      name: "",
      email: "",
      msg: "",
      course: "",
      gender: "",
      skills: []
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Enter Name..."
        onChange={handleChange}
        value={formData.name}
      />

      <br /><br />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Enter Email..."
        onChange={handleChange}
        value={formData.email}
      />

      {/* <h3>{formData.email}</h3> */}

      <br />

      {/* Textarea */}
      <textarea
        rows="5"
        cols="30"
        name="msg"
        value={formData.msg}
        onChange={handleChange}
        placeholder="Enter Message..."
      />

      <p>{formData.msg}</p>

      {/* Select */}
      <select
        name="course"
        value={formData.course}
        onChange={handleChange}
      >
        <option value="">Select Course</option>
        <option value="MERN">MERN</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
      </select>

      <p>{formData.course}</p>

      {/* Radio Buttons */}
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        Female
      </label>

      <p>{formData.gender}</p>

      {/* Checkboxes */}
      <label>
        <input
          type="checkbox"
          name="skills"
          value="Java"
          checked={formData.skills.includes("Java")}
          onChange={handleChange}
        />
        Java
      </label>

      <label>
        <input
          type="checkbox"
          name="skills"
          value="React"
          checked={formData.skills.includes("React")}
          onChange={handleChange}
        />
        React
      </label>

      <label>
        <input
          type="checkbox"
          name="skills"
          value="Node"
          checked={formData.skills.includes("Node")}
          onChange={handleChange}
        />
        Node
      </label>

      <p>{formData.skills.join(", ")}</p>

      <br />

      <button type="submit">Submit</button>

      <button
        type="button"
        onClick={handleReset}
      >
        Reset
      </button>

    </form>
  );
}