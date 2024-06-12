import React, { useState } from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import UniversityInput from './components/UniversityInput/UniversityInput';
import ScheduleTable from './components/ScheduleTable/ScheduleTable';
import TimeTable from './components/TimeTable/TimeTable';  
import './App.css';

function App() {
  const [state, setState] = useState(0); // 0: HomePage, 1: UniversityInput, 2: ScheduleTable
  const [courses, setCourses] = useState([]);  // State to hold the courses
  const [showTimetable, setShowTimetable] = useState(false);  // State to control the visibility of the TimeTable

  const handleGetStarted = () => {
    setState(1);
  };

  const handleUniversitySubmit = (newCourses) => {
    setCourses(newCourses);  // Update courses with new data
    setState(2);
  };

  const goHome = () => {
    setState(0);
  };

  const handleViewTimetable = () => {
    console.log("Courses to be displayed in timetable:", courses);
    setShowTimetable(true);  // Show the timetable when the button is pressed
  };

  return (
    <div className='App'>
      <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');</style>
      <Header onGetStarted={handleGetStarted} goHome={goHome} />
      <main className='main-content'>
        {state === 0 && <HeroSection onGetStarted={handleGetStarted} />}
        {state === 1 && <UniversityInput onSubmit={handleUniversitySubmit} />}
        {state === 2 && (
          <div className='content-container'>
            <div className='box'>
              <ScheduleTable setCourses={setCourses} />
            </div>
            <div className='box'>
              <TimeTable courses={courses} />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
