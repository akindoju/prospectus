import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import LevelSection from './components/LevelSection/LevelSection';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <LevelSection />
    </div>
  );
}

export default App;
