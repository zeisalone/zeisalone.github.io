import React from 'react';
import '../styles/About.css';
import { ReactComponent as ComputerIcon } from '../assets/computersvg.svg';
import { ReactComponent as SportsIcon } from '../assets/sportssvg.svg'; 

function About() {
  return (
    <section id="about" className="about-section">
      <div className="box-container">
        <div className="box">
          <div className="about-details">
            <h2 className="sub-title">Introduction</h2>
            <p className="text">
              Hello there, I am José Miguel Barbosa, I am 22 years old and I am currently finishing my Master's Degree in Software Engineering.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="about-details">
            <div className="title-with-icon">
              <ComputerIcon className="icon small-icon" />
              <h2 className="sub-title">Passion for Technology</h2>
            </div>
            <p className="text">
              I was born and raised in Braga, a city that has shaped much of who I am today. From a young age, I have always been fascinated by technology, which naturally led me to pursue a Bachelor's Degree in Computer Science and later to follow it up with a Master's Degree in Software Engineering.
            </p>
            <p className="text">
              My first real experience with programming was in high school during an API class in the 12th grade, and I've been passionate about it ever since. However, my journey into technology started even earlier, through my love for video games. Playing various types of games—such as sports games, simulation games, and fighting games—not only fueled my interest in technology but also shaped my problem-solving skills and creativity. Video games have been a key influence in guiding me towards a career in software development.
            </p>
          </div>
        </div>

        <div className="box">
          <div className="about-details">
            <div className="title-with-icon">
              <SportsIcon className="icon small-icon" />
              <h2 className="sub-title">Passion for Sports</h2>
            </div>
            <p className="text">
              Sports have always been a significant part of my life. I have been practicing federated karate since 2008 and have tried my hand at other sports as well. Currently, I also go to the gym regularly. Although I love football, let's just say my skills on the field are best described as having "two left feet." Nevertheless, my passion for the game led me to become a football referee, allowing me to stay connected to the sport I love.
            </p>
            <p className="text">
              I am passionate about various types of sports, including basketball, football, and martial arts (like MMA). I also enjoy playing sports video games, simulation games, and fighting games, among others.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
