// import {useState} from "react";
// export default function Forms(){
//   let[fullName, setFullName] = useState("");
//   let[userName, setUserName] = useState("");

//   let handleForms = (event) =>{
//     console.log(event.target.value);
//     setFullName(event.target.value);
//   }
//     let handleUserForms = (event) =>{
//     console.log(event.target.value);
//     setUserName(event.target.value);
//   }
//   return(
//     <form >
//     <label htmlFor="fullName">Full Name</label>
//     <input type="text"
//     placeholder="enter full Name"
//     onChange={handleForms}
//     value={fullName} 
//     id="fullName"
//     />
//     <br />
//     <br />
//     <label htmlFor="userName">User Name</label>
//     <input type="text"
//     placeholder="enter user Name"
//     onChange={handleUserForms}
//     value={userName} 
//     id="userName"
//     />
//     <br /><br /><br />
//     <button>submit</button>
//     </form>
//   )
// }

// handling multiple input
import {useState} from "react"
export default function Forms(){
  let[formData, setFormData] = useState({
    fullName:"",
    userName:"",
  });
  

  // let handleForms = (event) =>{
  //   console.log(event.target.value);
  //   setFullName(event.target.value);
  // }
  //   let handleUserForms = (event) =>{
  //   console.log(event.target.value);
  //   setUserName(event.target.value);
  // }
  let handleInputChange = (event) =>{
    let fieldName = event.target.name;
    let newValue = event.target.value;

    // console.log(fieldName);
    // console.log(fieldValue);

    // setFormData ((currData) =>{
    //   currData[fieldName] = newValue;
    //   return {...currData};
    // });

    // or
       setFormData ((currData) =>{
      return {...currData, [fieldName]:newValue};
      
    });



  };
  let handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData);
    setFormData({
       fullName:"",
       userName:"",
    })
  }
  return(
    <form onSubmit = {handleSubmit}>
    <label htmlFor="fullName">Full Name</label>
    <input type="text"
    placeholder="enter full Name"
    onChange = {handleInputChange}
    value={formData.fullName} 
    id="fullName"
    name="fullName"
    />
    <br />
    <br />
    <label htmlFor="userName">User Name</label>
    <input type="text"
    placeholder="enter user Name"
    onChange = {handleInputChange}
    
    value={formData.userName} 
    id="userName"
    name="userName"
    />
    <br /><br /><br />
    <button>submit</button>
    </form>
  )
}