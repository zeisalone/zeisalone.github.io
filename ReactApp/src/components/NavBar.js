import React from 'react';
import '../styles/NavBar.css';

function NavBar({ setActiveView }) {
  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li>
          <button className="nav-link-button" onClick={() => setActiveView('about')}>
            <span className="span-mother">
              <span>A</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
              <span>&nbsp;</span>
              <span>M</span>
              <span>e</span>
            </span>
            <span className="span-mother2">
              <span>A</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
              <span>&nbsp;</span>
              <span>M</span>
              <span>e</span>
            </span>
          </button>
        </li>
        <li>
          <button className="nav-link-button" onClick={() => setActiveView('experience')}>
            <span className="span-mother">
              <span>E</span>
              <span>x</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
              <span>i</span>
              <span>e</span>
              <span>n</span>
              <span>c</span>
              <span>e</span>
            </span>
            <span className="span-mother2">
              <span>E</span>
              <span>x</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
              <span>i</span>
              <span>e</span>
              <span>n</span>
              <span>c</span>
              <span>e</span>
            </span>
          </button>
        </li>
        <li>
          <button className="nav-link-button" onClick={() => setActiveView('education')}>
            <span className="span-mother">
              <span>E</span>
              <span>d</span>
              <span>u</span>
              <span>c</span>
              <span>a</span>
              <span>t</span>
              <span>i</span>
              <span>o</span>
              <span>n</span>
            </span>
            <span className="span-mother2">
              <span>E</span>
              <span>d</span>
              <span>u</span>
              <span>c</span>
              <span>a</span>
              <span>t</span>
              <span>i</span>
              <span>o</span>
              <span>n</span>
            </span>
          </button>
        </li>
        <li>
          <button className="nav-link-button" onClick={() => setActiveView('projects')}>
            <span className="span-mother">
              <span>P</span>
              <span>r</span>
              <span>o</span>
              <span>j</span>
              <span>e</span>
              <span>c</span>
              <span>t</span>
              <span>s</span>
            </span>
            <span className="span-mother2">
              <span>P</span>
              <span>r</span>
              <span>o</span>
              <span>j</span>
              <span>e</span>
              <span>c</span>
              <span>t</span>
              <span>s</span>
            </span>
          </button>
        </li>
        <li>
          <button className="nav-link-button" onClick={() => setActiveView('skills')}>
            <span className="span-mother">
              <span>S</span>
              <span>k</span>
              <span>i</span>
              <span>l</span>
              <span>l</span>
              <span>s</span>
            </span>
            <span className="span-mother2">
              <span>S</span>
              <span>k</span>
              <span>i</span>
              <span>l</span>
              <span>l</span>
              <span>s</span>
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
