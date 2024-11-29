import React from 'react';
import '../styles/Experience.css';
import camaraPhoto from '../assets/camaraBraga.png';
import refereePhoto from '../assets/ScoreImageHandler.png';
import ieeePhoto from '../assets/ieee.png'
import LagoPhoto from '../assets/Lago.png'
import PJSVPhoto from '../assets/pjsv.png'
import LPCPhoto from '../assets/LIGA-Port-Cancro.png'
import { ReactComponent as DateIcon } from '../assets/date.svg';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-box-container">
        <div className="experience-box">
          <div className="experience-details">
            <div className="title-with-icon7">
              <img src={ieeePhoto} alt="IEEE Membership Branch" className="experience-photo3" />
              <h2 className="designation">Membership Branch</h2>
            </div>
            <p className="company" data-text="IEEE - Universidade do Minho">IEEE - Universidade do Minho</p>
            <div className="dates">
              <DateIcon className="icon" /> Oct 2024 – Ongoing
            </div>
            <ul className="notes">
              <li>I help organize various activities, both internally for group members and for all students at Universidade do Minho.</li>
              <li>Contributed to organizing the Engineering Olympics, a large event that brings students together for hands-on and team challenges.</li>
              <li>Assisted in coordinating volunteering activities, strengthening IEEE's social impact within the local community and the university.</li>
              <li>This experience has been incredible for enhancing my organizational and collaboration skills and has allowed me to work closely with people who are passionate about technology and innovation.</li>
            </ul>
          </div>
        </div>
        <div className="experience-box">
          <div className="experience-details">
            <div className="title-with-icon7">
              <img src={refereePhoto} alt="Football Referee" className="experience-photo1" />
              <h2 className="designation">Football Referee</h2>
            </div>
            <p className="company" data-text="Associação de Futebol de Braga">Associação de Futebol de Braga</p>
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
        </div>
        <div className="experience-box">
          <div className="experience-details">
            <div className="title-with-icon7">
              <img src={camaraPhoto} alt="IT Support Technician" className="experience-photo2" />
              <h2 className="designation">IT Support Technician</h2>
            </div>
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
        </div>
        <div className="experience-box">
          <div className="experience-details">
            <div className="title-with-icon7">
              <img src={PJSVPhoto} alt="Youth Group Animator" className="experience-photo1" />
              <h2 className="designation">Youth Group Animator</h2>
            </div>
            <p className="company" data-text="Pastoral de Jovens de São Vítor">Pastoral de Jovens de São Vítor</p>
            <div className="dates">
              <DateIcon className="icon" /> Setember 2022 – Ongoing
            </div>
            <ul className="notes">
              <li>Prepare weekly sessions to engage the youth and foster a sense of community and faith.</li>
              <li>Organize larger activities and events throughout the year, such as retreats or community service projects.</li>
              <li>Encourage the younger generation by offering guidance and support whenever they face challenges.</li>
            </ul>
          </div>
        </div>
        <div className="experience-box">
          <div className="experience-details">
            <div className="title-with-icon7">
              <img src={LPCPhoto} alt="Volunteer Work" className="experience-photo4" />
              <h2 className="designation">Volunteer</h2>
            </div>
            <p className="company" data-text="Banco Alimentar & Liga Portuguesa Contra o Cancro">
              Banco Alimentar & Liga Portuguesa Contra o Cancro
            </p>
            <div className="dates">
              <DateIcon className="icon" /> [Start Date] – Ongoing
            </div>
            <ul className="notes">
              <li>Regularly participate in events and activities supporting local communities, including food drives and awareness campaigns.</li>
              <li>Develop interpersonal and organizational skills by engaging directly with people in need and collaborating with fellow volunteers.</li>
              <li>Enhance awareness of social issues and contribute to impactful initiatives aimed at improving lives.</li>
            </ul>
          </div>
        </div>
        <div className="experience-box">
          <div className="experience-details">
            <div className="title-with-icon7">
              <img src={LagoPhoto} alt="Under-13's Assistant Coach" className="experience-photo1" />
              <h2 className="designation">Under-13’s Assistant Coach</h2>
            </div>
            <p className="company" data-text="Clube Desportivo de Lago">Clube Desportivo de Lago</p>
            <div className="dates">
              <DateIcon className="icon" /> Setember 2024 – Ongoing
            </div>
            <ul className="notes">
              <li>Assist in preparing training sessions, ensuring activities align with the coach's strategic goals.</li>
              <li>Focus on coaching goalkeepers, helping them improve their skills and confidence during matches.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
