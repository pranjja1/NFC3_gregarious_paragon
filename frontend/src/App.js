import React from 'react'
import img from './assets/img.jpeg';
import Name from './Name.js'
import './App.css'
import Card from './Cards.js';
import Report from './Report.js';
import { createBrowserRouter, Route,Router, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/news') // Change the URL to the desired path
  };

  return (
 <>

<Name/>
<div className='img'>
 <img src={img} style={{position:"absolute",right:"65px",height:"300px",top:"47px"}}></img>
 
 <button style={{position:"absolute",right:"600px",height:"64px",top:"283px",width:"300px"}} onClick={handleRedirect}>Read Latest News</button>


 </div>

 <Card/>



  </>
  )
}

export default App;