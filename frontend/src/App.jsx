import React, { useState } from 'react';
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import UniversityInput from './components/UniversityInput/UniversityInput';
import ScheduleTable from './components/ScheduleTable/ScheduleTable';
import './App.css'

function App() {
  const [state, setState] = useState(0); // 0: HomePage, 1: UniversityInput, 2: ScheduleTable

  const handleGetStarted = () => {
    setState(1);
  };

  const handleUniversitySubmit = () => {
    setState(2);
  };

  const goHome = () => {
    setState(0);
  }

  return (
    <div className='App'>
      <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');</style>
      <Header onGetStarted={handleGetStarted} goHome = {goHome}/>
        <main className='main-content'>
          {state === 0 && <HeroSection onGetStarted={handleGetStarted} />}
          {state === 1 && <UniversityInput onSubmit={handleUniversitySubmit} />}
          {state === 2 && <ScheduleTable />}
        </main>
      <Footer />
    </div>
  );
}

export default App;
