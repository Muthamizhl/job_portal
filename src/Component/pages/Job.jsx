// src/pages/Jobs.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Job.css';

const jobData = [
  { id: 1, title: 'Frontend Developer', company: 'TechCorp', salary: '₹6 LPA', location: 'Chennai' },
  { id: 2, title: 'Backend Developer', company: 'CodeBase', salary: '₹7 LPA', location: 'Bangalore' },
  { id: 3, title: 'Full Stack Developer', company: 'DevStudio', salary: '₹8 LPA', location: 'Hyderabad' },
  { id: 4, title: 'UI/UX Designer', company: 'PixelWorks', salary: '₹5.5 LPA', location: 'Pune' },
  { id: 5, title: 'DevOps Engineer', company: 'Cloudify', salary: '₹9 LPA', location: 'Noida' },
];

const Jobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const navigate = useNavigate();

  const handleApply = (job) => {
    if (!appliedJobs.find((j) => j.id === job.id)) {
      setAppliedJobs([...appliedJobs, job]);
    }
  };

  const handleBack = () => {
    navigate('/Placement');
  };

  return (
    <div className="jobs-page-container">
      <button onClick={handleBack} className="back-btn">⬅ Back</button>
      <div className="job-portal-container">

        {/* Left Side: Jobs List */}
        <div className="jobs-list">
          <h3>Available Jobs</h3>
          {jobData.map((job) => (
            <div key={job.id} className="job-card">
              <div>
                <h4>{job.title}</h4>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
                <p><strong>Location:</strong> {job.location}</p>
              </div>
              <button onClick={() => handleApply(job)}>Easy Apply</button>
            </div>
          ))}
        </div>

        {/* Right Side: Applied Jobs */}
        <div className="applied-jobs">
          <h3>Applied Jobs</h3>
          {appliedJobs.length === 0 ? (
            <p>No applications yet.</p>
          ) : (
            appliedJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div>
                  <h4>{job.title}</h4>
                  <p><strong>Company:</strong> {job.company}</p>
                  <p><strong>Salary:</strong> {job.salary}</p>
                  <p><strong>Location:</strong> {job.location}</p>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Jobs;