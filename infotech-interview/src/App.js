import { useState } from "react";
import "./styles.css";
export default function App() {
   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    function validate() {
      const output = `<h2>Mr. ${name} your mail id ${email}  ${
        Password ? `successfully register` : `enter password `
      }`
      document.getElementById("root").innerHTML = output;
    }
  return (
    <div className="App">
      <form>
        <h3>INTERVIEW TASK</h3>
        <h5>REGISTERFORM </h5>
        <div>
          <label>NAME</label>
          <input id="name" type="text"
           placeholder="enter your name" 
          onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label>EMAIL</label>
          <input id="email" type="email" placeholder="enter your email" 
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label>PASSWORD</label>
          <input
            id="password"
            type="password"
            placeholder="enteryourpassword" 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={validate}>Submit</button>
      </form>
    </div>
  );
}
