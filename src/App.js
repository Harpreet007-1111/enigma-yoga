import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Navbar from './components/Navbar';
import Footer from '../src/components/Footer';
import Contact from '../src/components/Contact';
import Poses from '../src/components/Poses';
import Price from '../src/components/Price';
import Services from './components/Services';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <section id='/#'>
          <Home />
        </section>

        <section id='about'>
          <About />
        </section>

        <section id="service">
          <Services />
        </section>

        <section id='poses'>
          <Poses />
        </section>

        <section id='price'>
          <Price />
        </section>

        <section id='contact'>
          <Contact />
        </section>

        <Footer />
      </Router>
    </>
  );
}

export default App;
