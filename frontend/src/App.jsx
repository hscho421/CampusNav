import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='App'>
      <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');</style>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
