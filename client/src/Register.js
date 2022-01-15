import Axios from "axios";
import { useState } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [ssn, setSSN] = useState("");
  const [dob, setDob] = useState("");
  const [addr, setAddr] = useState("");
  const [type, setType] = useState("");

  const addDonor = () => {
      Axios.post('http://localhost:3001/create', {
          name: name,
          ssn: ssn,
          dob: dob,
          addr: addr,
          type: type
      }).then( () => {
          console.log('Donor inserted')
          setName("");
          setSSN("");
          setDob("");
          setAddr("");
          setType("");
      })
  }


    return ( 
        <div className="register-donor">
            <h2>Register a Donor</h2>
            <label>Name: </label>
            <input
             type='text'
             
             onChange = {(event) => {
                 setName(event.target.value)
             }}
             ></input>

            <label>Blood Type: </label>
            <input
             type='text'
             onChange = {(event) => {
                 setType(event.target.value)
             }}
             ></input>


            <label>SSN: </label>
            <input 
            type='text' onChange = {(event) => {
                setSSN(event.target.value);
            }}></input>

            <label>Date of birth: </label>
            <input 
            type='text' onChange = {(event) => {
                setDob(event.target.value)
            }}></input>

            <label>Address: </label>
            <input 
            type='text' onChange = {(event) => {
                setAddr(event.target.value)
            }}></input>

            <button onClick={addDonor}>Register</button>
            
        </div>
        
        
     );
}
 
export default Register;