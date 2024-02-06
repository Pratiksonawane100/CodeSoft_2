// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import EmailLink from './components/Emaillink';
import Projectcard from './components/Projectcard';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EmailLink/>
      <Home/>
      <About/>
      <Projectcard/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
