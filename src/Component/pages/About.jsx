import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Magic Bus Foundation</h2>
      <p>
        Magic Bus Foundation is a non-profit organization dedicated to empowering young people from underserved communities by helping them complete their education, gain skills, and move towards sustainable livelihood opportunities.
      </p>

      <p>
        Through a structured, activity-based curriculum, Magic Bus equips adolescents and youth with the life skills and employability skills they need to transition successfully into adulthood. Our job placement and vocational training programs aim to bridge the gap between education and employment.
      </p>

      <p>
        Since our inception, we have impacted the lives of over a million children and youth across India. With the support of our partners, mentors, and educators, Magic Bus continues to guide young individuals on their journey from childhood to livelihood.
      </p>

      <div className="about-mission">
        <h3>🎯 Our Mission</h3>
        <p>
          To enable children and young people to break out of poverty by acquiring the right skills, confidence, and support to complete education, find employment, and lead empowered lives.
        </p>
      </div>
    </div>
  );
};

export default About;

