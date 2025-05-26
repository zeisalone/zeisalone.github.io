import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section1">
      {/* Frase informativa no topo */}
      <p className="skills-note">
        Note: The scores reflect personal comfort with each language/technology.
      </p>

      <div className="skills-container1">
        {/* Programming Languages */}
        <div className="box1">
          <h2 className="skills-title1">Programming Languages</h2>
          <div className="dot-skill-table">
            <DotSkill name="JavaScript" level={5} />
            <DotSkill name="Python" level={5} />
            <DotSkill name="Java" level={5} />
            <DotSkill name="HTML & CSS" level={5} />
            <DotSkill name="Elixir" level={5} />
            <DotSkill name="Kotlin" level={4} />
            <DotSkill name="SQL" level={4} />
            <DotSkill name="C" level={4} />
            <DotSkill name="C++" level={3} />
            <DotSkill name="C#" level={3} />
            <DotSkill name="Ruby" level={3} />
            <DotSkill name="Haskell" level={2} />
          </div>
        </div>

        {/* Frameworks and Other Technical Skills */}
        <div className="box1">
          <h2 className="skills-title1">Frameworks and Other Technical Skills</h2>
          <div className="dot-skill-table">
            <DotSkill name="Phoenix Framework" level={5} />
            <DotSkill name="React" level={5} />
            <DotSkill name="React Native" level={5} />
            <DotSkill name="Tailwind CSS" level={5} />
            <DotSkill name="Android" level={4} />
            <DotSkill name="Vue" level={4} />
            <DotSkill name="NodeJS" level={4} />
            <DotSkill name="UML" level={4} />
            <DotSkill name="Figma" level={4} />
            <DotSkill name="Pygame" level={4} />
            <DotSkill name="PyTorch" level={4} />
            <DotSkill name="TensorFlow" level={4} />
            <DotSkill name="Pandas" level={4} />
            <DotSkill name="Scikit-Learn" level={4} />
            <DotSkill name="Postgres" level={4} />
            <DotSkill name="Docker" level={3} />
            <DotSkill name="Ruby on Rails" level={3} />
            <DotSkill name="Spark" level={3} />
            <DotSkill name="Cloud" level={3} />
            <DotSkill name="Wildfly" level={2} />
            <DotSkill name="OpenGL" level={2} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DotSkill({ name, level }) {
  const totalDots = 5;

  return (
    <div className="dot-skill-row">
      <span className="dot-skill-name">{name}</span>
      <div className="dot-skill-dots">
        {Array.from({ length: totalDots }).map((_, i) => (
          <span
            key={i}
            className={`dot-skill-dot ${i < level ? 'filled' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
