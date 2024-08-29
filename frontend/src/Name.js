import React, { useState } from "react";
import './Name.css'
import { Dropdown } from "bootstrap";
import Report from "./Report.js";
import { useNavigate } from "react-router-dom";

const Name = () => {
  // State to manage loading state
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  // State to manage form data
  const [formData, setFormData] = useState({
    Name: "",
  });
  // State to manage prediction result
  const [result, setResult] = useState("");
  // State to manage displaying result
  const [showSpan, setShowSpan] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    let inputData = { ...formData };
    inputData[name] = value;
    setFormData(inputData);
  };

  // Function to handle the 'Predict Selling Price' button click
  const handlePredictClick = () => {
    const url = "http://localhost:5000/predict";
    setIsloading(true);
    const jsonData = JSON.stringify(formData);
    // Fetch request to the Flask backend
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: jsonData,
    })
      .then((response) => response.json())
      .then((response) => {
        setResult(response.Prediction);
        setIsloading(false);
        setShowSpan(true);
      });
  };


  const handleRedirect = () => {
    navigate('/report') // Change the URL to the desired path
  };

  return (
    
      <div className="container text-center mt-4" style={{backgroundColor:"#cc6666",height:"350px",top:"0px",padding:"0px"}}>
        <div className="container">
          <form method="post" acceptCharset="utf-8" name="Modelform">



<div className="text-center mt-3" style={{position:"relative",top:"100px",left:"60px",width:"350px"}}>
      <label>
        <p style={{color:"white"}}>Search By Candidate Name:</p>
        
        
        <button style={{position:"absolute",top:"87px",left:"180px",width:"80px"}} onClick={handleRedirect} >Search</button>
        
      </label>
      <br />
      <input
        type="text"
        className="form-control"
        id="Candidate_name"
        name="Candidate_name"
        value={formData.Candidate_name}
        onChange={handleChange}
        placeholder="Candidate_name"
      />
      
      <select style={{position:"relative",top:"10px",left:"13%",width:"120px"}}
                className="selectpicker form-control"
                id="Party_Type"
                name="Party_Type"
                value={formData.Party_Type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="0">Lok Sabha </option>
                <option value="1">Rajya Sabha</option>
              </select>
            </div>
</form>
      
    </div>
    
        </div>
     

      //results - in table format


 
  );
};
export default Name;