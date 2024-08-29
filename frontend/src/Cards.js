import React from 'react';
import './Cards.css';
import img from './assets/img.jpeg'; // Import your image
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Cards() {

  const handleRedirect = () => {
    navigate('/report') // Change the URL to the desired path
  };
  const navigate = useNavigate();

  return (
    <div className="cards-container">
      <div className="card" style={{ top: "50px", left: "84px" }} onClick={handleRedirect} >
        <img src={img} className="card-image" alt="Narendra Modi" />
        <div className="content">Rajnath Singh</div>
      </div>
      <div className="card" style={{ top: "50px", left: "414px" }} onClick={handleRedirect}>
        <img src={img} className="card-image" alt="Rahul Gandhi" />
        <div className="content">Rahul Gandhi</div>
      </div>
      <div className="card" style={{ top: "50px", left: "724px" }} onClick={handleRedirect}>
        <img src={img} className="card-image" alt="Amit Shah" />
        <div className="content">Amit Shah</div>
      </div>
      <div className="card" style={{ top: "400px", left: "84px" }} onClick={handleRedirect}>
        <img src={img} className="card-image" alt="Rajnath Singh" />
        <div className="content">Narendra Modi</div>
      </div>
      <div className="card" style={{ top: "400px", left: "414px" }} onClick={handleRedirect}>
        <img src={img} className="card-image" alt="Jugal Kishor" />
        <div className="content">Jugal Kishor</div>
      </div>
      <div className="card" style={{ top: "400px", left: "724px" }} onClick={handleRedirect}>
        <img src={img} className="card-image" alt="Abdul Khaleque" />
        <div className="content">Abdul Khaleque</div>
      </div>
    </div>
  );
}

export default Cards;
