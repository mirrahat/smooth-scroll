import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';

import useScrollSpy from 'react-use-scrollspy';

const App = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  return (
    <div className="App">

      <nav className="App-navigation">
        <a href='#s1'>   <span
          className={
            activeSection === 0
              ? 'App-navigation-item App-navigation-item--active'
              : 'App-navigation-item'
          }
        >
          Section 1
        </span>
        </a>
        <a href='#s2'>
          <span
            className={
              activeSection === 1
                ? 'App-navigation-item App-navigation-item--active'
                : 'App-navigation-item'
            }
          >
            Section 2
          </span>
        </a>
        <a href='#s3'>
          <span
            className={
              activeSection === 2
                ? 'App-navigation-item App-navigation-item--active'
                : 'App-navigation-item'
            }
          >
            Section 3
          </span>
        </a>
      </nav>
      <section style={{ backgroundColor: 'red' }} id='s1' className="App-section" ref={sectionRefs[0]}>
        <h1>Section wwwwwwwwwww1</h1>
      </section>
      <section style={{ backgroundColor: 'green' }} id='s2' className="App-section" ref={sectionRefs[1]}>
        <h1>Section dddddddddddd2</h1>
      </section>
      <section id='s3' style={{ backgroundColor: 'yellow' }} className="App-section" ref={sectionRefs[2]}>
        <h1>Section gggggggggg3</h1>
      </section>
    </div>
  );
};

export default App;

