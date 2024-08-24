import React from 'react';
import '../styles/Education.css';
import mastersPhoto from '../assets/EscolaEngenharia.png';
import bachelorsPhoto from '../assets/EscolaCiec.png';

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="box-container">
        <div className="box">
          <div className="education-details">
            <h2 className="designation">Master's Degree in Software Engineering</h2>
            <p className="university">Universidade do Minho</p>
            <div className="dates">
              <span>Sept 2023 – Ongoing</span>
            </div>
            <h3 className="profiles-title">Chosen Profiles:</h3>
            <ul className="notes">
              <li>Application Engineering</li>
              <li>SDVM – Software Development, Validation, and Maintenance</li>
            </ul>
          </div>
          <div className="education-photo1">
            <img src={mastersPhoto} alt="Master's Degree in Software Engineering" />
          </div>
        </div>

        <div className="box">
          <div className="education-details">
            <h2 className="designation">Bachelor's Degree in Computer Science</h2>
            <p className="university">Universidade do Minho</p>
            <div className="dates">
              <span>Sept 2020 – June 2023</span>
            </div>
          </div>
          <div className="education-photo2">
            <img src={bachelorsPhoto} alt="Bachelor's Degree in Computer Science" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
