import React, { Fragment } from 'react';
import About from './components/About';
import Cards from './components/Cards';
import FloatContact from './components/FloatContact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';





function App() {
  return (
    <Fragment>
    <div>
     
      <Navbar />
      <Hero />
      <About />
      
      <Cards />
      
    
      <Footer />
  
    </div>
    <FloatContact/>
    </Fragment>
  );
}

export default App;