import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="home-title">Welcome to Magic Bus Foundation</h2>

      <div className="stats-container">
        <div className="stat-card">
          <h3>👩‍🎓 Students Studied</h3>
          <p>1200</p>
        </div>

        <div className="stat-card">
          <h3>🎉 Students Placed</h3>
          <p>850</p>
        </div>

        <div className="stat-card">
          <h3>📌 Students Unplaced</h3>
          <p>350</p>
        </div>

        <div className="stat-card job-search">
          <h3>🔍Jobs</h3>
          <p> Magic Bus</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
