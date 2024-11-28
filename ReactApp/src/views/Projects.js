import React from 'react';
import '../styles/Projects.css';
import mobileAppPhoto from '../assets/BraGuia.png';
import onlineLibraryPhoto from '../assets/Coolreads.png';
import discordBotPhoto from '../assets/Deleter.jpg';
import EngagePhoto from '../assets/engagelogo.png';
import ReactPhoto from '../assets/React.png';
import DataPhoto from '../assets/DataAnalysis.png';
import buttonIcon from '../assets/buttonicon.svg';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="box-container">

        {/* Projeto Mobile App */}
        <div className="project-box">
          <div className="project-details">
            <div className="title-with-icon9">
              <img src={mobileAppPhoto} alt="Mobile App" className="project-photo1" />
              <h2 className="designation">Mobile App</h2>
            </div>
            <p className="company" data-text="University Project">University Project</p>
            <div className="project-link">
              <a href="https://github.com/JoseBambora/Projeto-TDS" target="_blank" rel="noopener noreferrer">
                <button className="button">
                  <img src={buttonIcon} alt="Button Icon" />
                  <p className="text">Project Link</p>
                </button>
              </a>
            </div>
            <ul className="notes">
              <li>Technologies - Java, JavaScript, Android, React Native, SQLite, Realm</li>
              <li>
                This app, named BraGuia, was a university project where every group of students had to develop an application focused on city trails in Braga. 
                While we shared a common data source with our classmates, we added our unique touch and implemented the features in a way that made us proud.
                It was a rewarding experience that greatly enhanced my understanding of Android development and fueled my curiosity to explore this field further.
              </li>
            </ul>
          </div>
        </div>
        <div className="project-box">
          <div className="project-details">
            <div className="title-with-icon9">
              <img src={onlineLibraryPhoto} alt="Online Library" className="project-photo2" />
              <h2 className="designation">Online Library</h2>
            </div>
            <p className="company" data-text="University Project">University Project</p>
            <div className="project-link">
              <a href="https://github.com/mirelois/GenericOnlineLibrary" target="_blank" rel="noopener noreferrer">
                <button className="button">
                  <img src={buttonIcon} alt="Button Icon" />
                  <p className="text">Project Link</p>
                </button>
              </a>
            </div>
            <ul className="notes">
              <li>Technologies - Java, JavaScript, Vue, HTML, CSS, Shell, Docker</li>
              <li>
                The online library coolReads is a project developed with four colleagues. It involved building an Online Library platform that managed book collections and user interactions.
                The project was an excellent opportunity to delve into both frontend and backend development, giving me a solid understanding of how these two sides communicate.
                The idea of creating a webpage focused on collections came from our group's interest in exploring a different perspective on the systems we were familiar with.
              </li>
            </ul>
          </div>
        </div>
        <div className="project-box">
          <div className="project-details">
            <div className="title-with-icon9">
              <img src={discordBotPhoto} alt="Discord Bot" className="project-photo3" />
              <h2 className="designation">Discord Bot</h2>
            </div>
            <p className="company" data-text="Personal Project">Personal Project</p>
            <div className="project-link">
              <a href="https://github.com/zeisalone/TheDeleterBot" target="_blank" rel="noopener noreferrer">
                <button className="button">
                  <img src={buttonIcon} alt="Button Icon" />
                  <p className="text">Project Link</p>
                </button>
              </a>
            </div>
            <ul className="notes">
              <li>Technologies - Python</li>
              <li> As an avid Discord user for many years, I often wondered what it would take to create and develop a bot that could function seamlessly within the platform.
                Driven by curiosity, I decided to take on the challenge and build a bot myself. The experience was not only fun but also made helped me improve.
                The bot focused on enhancing existing functionalities of other bots, making it fairly easy for myself to test and play around and allowing me to experiment and learn about Python in a practical, engaging way.</li>
            </ul>
          </div>
        </div>
        <div className="project-box">
          <div className="project-details">
            <div className="title-with-icon9">
              <img src={EngagePhoto} alt="Social Media Post Manager" className="project-photo3" />
              <h2 className="designation">Social Media Post Manager + CRM</h2>
            </div>
            <p className="company" data-text="Personal Project">University + Company project</p>
            <div className="project-link">
              <a href="https://github.com/regedor/pi-ww" target="_blank" rel="noopener noreferrer">
                <button className="button">
                  <img src={buttonIcon} alt="Button Icon" />
                  <p className="text">Project Link</p>
                </button>
              </a>
            </div>
            <ul className="notes">
              <li>Technologies - Ruby on Rails, Tailwind CSS, PostgreSQL, Heroku, Circle CI</li>
              <li>For our final master’s degree project, as part of the course "Projeto de Informática," my group chose to address a proposed challenge from Wellbeing Warrior. The objective was to develop an internal web application that combined functionalities for a Customer Relationship Manager (CRM) and a Marketing Campaign Manager (MCM).
                  Given the tight two-month timeframe (half the originally expected four months) we needed to adapt. The agreed goal with the company was to deliver a fully functional and nearly complete MCM, while implementing as many CRM features as possible to provide a solid foundation for future development.
                  We successfully achieved this, surpassing the company's expectations and even our own, by delivering a robust application despite the limited time.
              </li>
            </ul>
          </div>
        </div>
        <div className="project-box">
          <div className="project-details">
            <div className="title-with-icon9">
              <img src={ReactPhoto} alt="Personal Website" className="project-photo3" />
              <h2 className="designation">Personal Website</h2>
            </div>
            <p className="company" data-text="Personal Project">Personal Project</p>
            <div className="project-link">
              <a href="https://github.com/zeisalone/zeisalone.github.io" target="_blank" rel="noopener noreferrer">
                <button className="button">
                  <img src={buttonIcon} alt="Button Icon" />
                  <p className="text">Project Link</p>
                </button>
              </a>
            </div>
            <ul className="notes">
              <li>Technologies - React</li>
              <li>This is my personal website, the one you are currently visiting. I built it using React with the goal of complementing my CV by providing additional space to showcase my work and experiences.
                  To host the website, I took advantage of GitHub Pages, which allowed me to deploy it efficiently and for free. This project has been an excellent opportunity to explore front-end development and create a platform that represents mey.</li>
            </ul>
          </div>
        </div>
        <div className="project-box">
          <div className="project-details">
            <div className="title-with-icon9">
              <img src={DataPhoto} alt="Data Analysis Project" className="project-photo3" />
              <h2 className="designation">Data Analysis Project</h2>
            </div>
            <p className="company" data-text="University Project">University Project</p>
            <div className="project-link">
              <a href="https://github.com/JoseBambora/ProjetoDAA" target="_blank" rel="noopener noreferrer">
                <button className="button">
                  <img src={buttonIcon} alt="Button Icon" />
                  <p className="text">Project Link</p>
                </button>
              </a>
            </div>
            <ul className="notes">
              <li>Technologies - Python, Jupyter Notebook, Pandas, Numpy</li>
              <li>This project was developed as part of a university class and was completed in collaboration with three classmates. It focused on learning and applying data analysis techniques to improve and predict outcomes using two datasets.
                  The first dataset involved predicting energy injection in kWh, while the second focused on determining the likelihood of success for crowdfunding campaigns.
                  Working on this project significantly enhanced my understanding of data analysis. It required deep study and improvement of datasets. This experience solidified my interest in the field and provided valuable hands-on learning.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
