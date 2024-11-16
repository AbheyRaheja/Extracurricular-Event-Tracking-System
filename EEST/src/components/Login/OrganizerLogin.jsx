// src/components/OrganizerLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrganizerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Organizer");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@lnmiit.ac.in$/;
    if (!emailRegex.test(email)) {
      setError("Please use a valid LNMIIT email address.");
      return;
    }
    setError("");
    navigate("/organizer-dashboard");
  };

  return (
    <div className="login-page">
      <button onClick={() => navigate("/")}>Back</button>
      <h2>Organizer Login</h2>
      {error && <p className="error">{error}</p>}
      <label>Role:</label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Organizer</option>
        <option>Faculty</option>
        <option>Gym Khana</option>
        <option>Administration</option>
      </select><br />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default OrganizerLogin;
