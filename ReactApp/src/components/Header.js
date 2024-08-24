import React, { useState, useEffect, useRef } from 'react';
import '../styles/Header.css';
import profilePic from '../assets/profile.png';
import { ReactComponent as LocationIcon } from '../assets/location.svg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../assets/github.svg';
import { ReactComponent as ResumeIcon } from '../assets/pdflogo.svg';
import { ReactComponent as EmailIcon } from '../assets/email.svg';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="name-section">
            <h1 className="name">José Miguel Barbosa</h1>
            <p className="titles">
              <span>• Software Engineer</span>
              <span>• Programmer</span>
              <span>• Football Referee</span>
            </p>
            <div className="contact-info">
              <p className="location">
                <LocationIcon />
                Braga, Portugal
              </p>
              <p className="email">
                <EmailIcon />
                <a href="mailto:jmbarbosa2002@gmail.com">jmbarbosa2002@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jose-miguel-barbosa-314b04264" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            LinkedIn
          </a>
          <a href="https://github.com/zeisalone" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            GitHub
          </a>
          <div className="cv-container" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="cv-button">
              <ResumeIcon />
              Curriculum Vitae
            </button>
            <div className={`dropdown-menu ${dropdownOpen ? 'show-dropdown' : ''}`}>
              <a href="/resume-en.pdf" target="_blank" rel="noopener noreferrer">English</a>
              <a href="/resume-pt.pdf" target="_blank" rel="noopener noreferrer">Português</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
