export default function Employee(){
  const isWorking = true;

  return(
    <div className="card">
      <h2>Employee section</h2>
      <p>Name : Rahul</p>
      <p>Department : IT</p>
      {isWorking && <p>Currently Working</p>}
    </div>
  )
}