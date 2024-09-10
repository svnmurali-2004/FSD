import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from 'axios'
function App() {
  const [sname, setStudentName] = useState("");
  const [rollnumber, setRollnumber] = useState("");
  const [section,setSection] = useState("");
  const submitReview = () => {
    Axios.post('https://jubilant-space-engine-qrg9v5j9rvg3q5r-9000.app.github.dev/students',
      {
        name: sname,
        rollnumber,
        section
      }).then(() => {
        alert("success");
      });
  };
  return (
    <div className="App">
      <h1>CRUD Application Demo</h1>
      <div className="information">
        <label><b>Student Name</b></label>
        <input
          type="text"
          name="sname"
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
          required />
        <label><b>Roll Number</b></label>
        <input
          type="text"
          name="tech"
          onChange={(e) => {
            setRollnumber(e.target.value);
          }}
          required />
        <label><b>Section</b></label>
        <input
          type="text"
          name="status"
          onChange={(e) => {
            setSection(e.target.value);
          }}
          required />
        <button onClick={submitReview}><b>Submit</b></button>
      </div>
    </div>);
}
export default App;