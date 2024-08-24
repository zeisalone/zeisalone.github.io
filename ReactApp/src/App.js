import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './views/About';
import Experience from './views/Experience';
import Projects from './views/Projects';
import Education from './views/Education';
import Skills from './views/Skills'

function App() {
  const [activeView, setActiveView] = useState('about');

  const renderView = () => {
    switch (activeView) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      default:
        return <About />;
    }
  };

  return (
    <div className="App">
      <Header />
      <NavBar setActiveView={setActiveView} />
      <main className="main-content">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
