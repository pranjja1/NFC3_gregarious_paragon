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
    navigate('/lok') // Change the URL to the desired path
  };

  const handleRedirect2 = () => {
    navigate('/raj') // Change the URL to the desired path
  };
  return (
    
      <div className="container text-center mt-4" style={{backgroundColor:"#cc6666",height:"350px",top:"0px",padding:"0px"}}>
        <div className="container">
        
<div className="text-center mt-3" style={{position:"relative",top:"100px",left:"60px",width:"350px"}}>        
        
        <button style={{position:"absolute",top:"37px",left:"170px",width:"130px",height:"50px"}} onClick={handleRedirect} >Lok Sabha</button>

        <button style={{position:"absolute",top:"37px",left:"30px",width:"130px",height:"50px"}} onClick={handleRedirect2} >Rajya Sabha</button>
        
            </div>      
    </div>
    
        </div>
     

      //results - in table format


 
  );
};
export default Name;