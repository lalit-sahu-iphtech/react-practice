import { useState } from "react";

export default function Skills() {
  let [skills, setSkills] = useState(["java"]);

  let addSkills = () => {
    setSkills([...skills, "react"]);
  };

  return (
    <div>
      <p>{skills.join(", ")}</p>
      <button onClick={addSkills}>Add</button>
    </div>
  );
}