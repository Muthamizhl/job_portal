import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Job'
import './Placement.css';

const Placements = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just navigate to /jobs
    navigate('/Job');
  };

  return (
    <div className="page-container">
      <h2>Placements</h2>
      <div className="login-box">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Placements;
