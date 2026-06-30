export default function EmployeeList(){
  let employees = [
     { id: 1, name: "Lalit", role: "Developer" },
    { id: 2, name: "Rahul", role: "Tester" },
    { id: 3, name: "Aman", role: "Manager" }
  ];
  return(
    <div>
      <h1>Employees</h1>
      {employees.map((emp)=>{
        return(
          <div key={emp.id}>
            <p>Name : {emp.name}</p>
            <p>Name : {emp.role}</p>
            <hr />

          </div>
        )
      })}

    </div>
  )
}