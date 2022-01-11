import Axios from "axios";
import { useState } from "react";
const Register = () => {
  const [name, setName] = useState("")
  const [ssn, setSSN] = useState("");
  const [dob, setDob] = useState("");
  const [addr, setAddr] = useState("");

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

            <label>SSN: </label>
            <input 
            type='text' onChange = {(event) => {
                setSSN(event.target.value)
            }}></input>

            <label>Date of birth: </label>
            <input 
            type='text' onChange = {(event) => {
                setDob(event.target.value)
                console.log(dob)
            }}></input>

            <label>Address: </label>
            <input 
            type='text' onChange = {(event) => {
                setAddr(event.target.value)
            }}></input>

            <button>Register</button>
            
        </div>
        
        
     );
}
 
export default Register;