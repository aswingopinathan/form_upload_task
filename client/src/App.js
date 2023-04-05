import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [place, setPlace] = useState("");
  const [experience, setExperience] = useState("");
  const [resume, setResume] = useState({});
  const [error, setError] = useState("");

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };


  const handleFile = (e)=>{
    if(e.target && e.target.files[0]){
      setResume({selectedFile: e.target.files[0]})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
console.log("resume in handleSubmit",resume.selectedFile);
    try {
      axios 
        .post(
          "http://localhost:5000/signup",
          {
            name: name,
            lastname: lastname, 
            place: place, 
            experience: experience,
            resume: resume.selectedFile,
          },
          config
        )
        .then((res) => {
          console.log("received backend response", res.data);
          setError("");
        })
        .catch((error) => {
          console.log("error", error.response.data.message);
          setError(error.response.data.message);
        });
    } catch (error) {
      console.log("error", error);
    } 
  };

  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}
      encType="multipart/form-data">
        <div>
          <label htmlFor="name">name</label>
          <br></br>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="lastname">lastname</label>
          <br></br>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="place">place</label>
          <br></br>
          <input
            type="text"
            name="place"
            value={place}
            onChange={(e) => {
              setPlace(e.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="experience">experience</label>
          <br></br>
          <input
            type="text"
            name="experience"
            value={experience}
            onChange={(e) => {
              setExperience(e.target.value);
            }}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="resume">resume</label>
          <br></br>
          <input
            type="file" 
            multiple
            name="resume"
            onChange={(e) => {
              console.log('e.target.files',e.target.files)
              console.log('e.target.files[0]',e.target.files[0])
              handleFile(e)
            }}
            required
          ></input>
        </div>
        <div>
          <button type="submit">submit</button>
          {error ? <p style={{ color: "red" }}>{error}</p> : ""}
        </div>
      </form>
    </div>
  );
}

export default App;
