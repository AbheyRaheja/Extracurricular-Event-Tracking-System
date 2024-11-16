// src/components/LandingPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png"; // Import the image

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Welcome to LNMIIT</h1>
      <img src={logo} alt="EETS LNMIIT Logo" className="logo" /> {/* Use imported image */}
      <h2>Extra-Curricular Event Tracking System</h2>
      <p>Integrated Software Development Lab</p>
      <button onClick={() => navigate("/student-login")}>Student Login</button>
      <button onClick={() => navigate("/organizer-login")}>Organizer Login</button>
    </div>
  );
}

export default LandingPage;