// ----------props concept---------->
export default function Student(props){
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>


    </div>
  )
}

// --------Destructuring----->
export default function Student({name, age}){
  return(
    <div>
      <p>{name}</p>
      <p>{age}</p>


    </div>
  )
}

// --------Default props----->
export default function Student({name, age, city="Lucknow"}){
  return(
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{city}</p>


    </div>
  )
}