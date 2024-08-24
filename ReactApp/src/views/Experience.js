import React from 'react';
import '../styles/Experience.css';
import camaraPhoto from '../assets/camaraBraga.png';
import refereePhoto from '../assets/RefereePic.jpg';
import { ReactComponent as DateIcon } from '../assets/date.svg';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="box-container">
        <div className="box">
          <div className="experience-details">
            <h2 className="designation">Football Referee</h2>
            <p className="company"data-text="Associação de Futebol de Braga">Associação de Futebol de Braga</p>
            <div className="dates">
              <DateIcon className="icon" /> Jan 2022 – Ongoing
            </div>
            <ul className="notes">
              <li>Referee and assistant referee in football matches of all levels. Currently I am in the C7 category</li>
              <li>Optimized skills in people management, observation, and quick thinking.</li>
              <li>Constantly have to make quick and accurate decisions in high-pressure situations</li>
              <li>Worked closely with other referees and officials, which helped me improve my team working skills</li>
            </ul>
          </div>
          <div className="experience-photo1">
            <img src={refereePhoto} alt="Football Referee" />
          </div>
        </div>

        <div className="box">
          <div className="experience-details">
            <h2 className="designation">IT Support Technician</h2>
            <p className="company" data-text="Câmara Municipal de Braga">Câmara Municipal de Braga</p>
            <div className="dates">
              <DateIcon className="icon" /> June 2024
            </div>
            <ul className="notes">
              <li>Provided IT support during the elections for the European Parliament.</li>
              <li>When the system was at its slowest, I managed to find a time-efficient solution that kept us working without voters noticing.</li>
              <li>Helped me learn more about informatic systems and how the political process works.</li>
            </ul>
          </div>
          <div className="experience-photo2">
            <img src={camaraPhoto} alt="IT Support Technician" />
          </div>
        </div>
      </div> 
    </section>
  );
}

export default Experience;
