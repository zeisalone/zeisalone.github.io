import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section1">
    <div className="skills-container1">
      <div className="box1">
        <h2 className="skills-title1">Programming Languages</h2>
        <div className="skills-list1">
          <Skill name="Python" level="95" />
          <Skill name="JavaScript" level="95" />
          <Skill name="Java" level="90" />
          <Skill name="HTML & CSS" level="90" />
          <Skill name="Kotlin" level="80" />
          <Skill name="SQL" level="75" />
          <Skill name="C" level="75" />
          <Skill name="C++" level="70" />
          <Skill name="C#" level="70" />
          <Skill name="Ruby" level="70" />
          <Skill name="Haskell" level="60" />
        </div>
      </div>
      <div className="box1">
        <h2 className="skills-title1">Frameworks and Other Technical Skills</h2>
        <div className="skills-list1">
          <Skill name="React" level="90" />
          <Skill name="React Native" level="90" />
          <Skill name="Android" level="85"/>
          <Skill name="Vue" level="85" />
          <Skill name="Tailwind CSS" level="85" />
          <Skill name="NodeJS" level="80" />
          <Skill name="UML" level="80" />
          <Skill name="Figma" level="80" />
          <Skill name="Pygame" level="75" />
          <Skill name="PyTorch" level="75" />
          <Skill name="TensorFlow" level="75" />
          <Skill name="Pandas" level="75" />
          <Skill name="Scikit-Learn" level="75" />
          <Skill name="Docker" level="70"/>
          <Skill name="Ruby on Rails" level="70" />
          <Skill name="Postgres" level="65" />
          <Skill name="Spark" level="65" /> 
          <Skill name="Cloud" level="65"/>
          <Skill name="Wildfly" level="60" />
          <Skill name="OpenGL" level="55" />
        </div>
      </div>
    </div>
  </section>
  );
}

function Skill({ name, level }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="skill-card1">
      <div className="percent1">
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" style={{ strokeDashoffset: offset }}></circle>
        </svg>
        <div className="num1">
          <h2>{level}<span>%</span></h2>
        </div>
      </div>
      <h2 className="text1">{name}</h2>
    </div>
  );
}

export default Skills;
