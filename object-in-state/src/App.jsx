import { useState } from "react";

export default function App(){

  let [employee, setEmployee] = useState({
    name: "Lalit",
    department: "IT",
    active: true
  });

  // Update Name
  let updateName = () => {
    setEmployee({
      ...employee,
      name: "Rahul"
    });
  };

  // Update Department
  let updateDepartment = () => {
    setEmployee({
      ...employee,
      department: "HR"
    });
  };

  // Toggle Status
  let toggleStatus = () => {
    setEmployee({
      ...employee,
      active: !employee.active
    });
  };

  return(
    <div>

      <h2>Name: {employee.name}</h2>

      <h2>
        Department: {employee.department}
      </h2>

      <h2>
        Status:
        {employee.active ? " Active" : " Inactive"}
      </h2>

      <button onClick={updateName}>
        Update Name
      </button>

      <button onClick={updateDepartment}>
        Update Department
      </button>

      <button onClick={toggleStatus}>
        Toggle Status
      </button>

    </div>
  )
}