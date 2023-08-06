import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Footer/>
    </div>
  );
  }
}

export default App;

