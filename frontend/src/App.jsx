import React, { useState } from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import UniversityInput from './components/UniversityInput/UniversityInput';
import ScheduleTable from './components/ScheduleTable/ScheduleTable';
import TimeTable from './components/TimeTable/TimeTable';
import AvailableTimeTable from './components/RouteTimeTable/RouteTimeTable'; // Import the AvailableTimeTable component
import { useTranslation } from 'react-i18next';
import Map from './components/Map/Map';
import RouteMap from './components/RouteMap/RouteMap';
import './App.css';

const App = () => {
  const { t } = useTranslation();
  const [state, setState] = useState(0); // 0: HomePage, 1: UniversityInput, 2: ScheduleTable, 3: Route Calculation
  const [courses, setCourses] = useState([]); // State to hold the courses
  const [selectedUniversity, setSelectedUniversity] = useState(''); // State to hold the selected university
  const [buildingName, setBuildingName] = useState(null);
  const [roomNumber, setRoomNumber] = useState(null); // Define roomNumber state
  const [route, setRoute] = useState(null); // State to hold the route data

  const handleGetStarted = () => {
    setState(1);
  };

  const handleUniversitySubmit = (university) => {
    setSelectedUniversity(university);
    setState(2);
  };

  const goHome = () => {
    setState(0);
  };

  const getRoute = () => {
    setState(3);
  };

  const handleGapClick = async (startBuilding, endBuilding) => {
    // Clear previous route state
    setRoute(null);

    try {
      console.log(`Calculating route from ${startBuilding} to ${endBuilding}`);
      const directionsService = new window.google.maps.DirectionsService();
      const result = await directionsService.route({
        origin: `${startBuilding}, ${selectedUniversity}`,
        destination: `${endBuilding}, ${selectedUniversity}`,
        travelMode: window.google.maps.TravelMode.WALKING
      });

      if (result.status === 'OK') {
        console.log('Route result:', result);
        setRoute(result);
      } else {
        console.error('Error fetching directions:', result);
      }
    } catch (error) {
      console.error('Error in handleGapClick:', error);
    }
  };

  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <Header onGetStarted={handleGetStarted} goHome={goHome} />
      <main className="main-content">
        {state === 0 && <HeroSection onGetStarted={handleGetStarted} />}
        {state === 1 && <UniversityInput onSubmit={handleUniversitySubmit} />}
        {state === 2 && (
          <div className="content-container">
            <div className="box">
              <h1>{selectedUniversity}</h1>
            </div>
            <div className="box">
              <ScheduleTable setCourses={setCourses} />
            </div>
            <div className="inner-box-container">
              <div className="inner-box">
                <TimeTable courses={courses} setBuildingName={setBuildingName} setRoomNumber={setRoomNumber} /> {/* Pass setRoomNumber */}
              </div>
              <div className="inner-box">
                <Map university={selectedUniversity} buildingName={buildingName} roomNumber={roomNumber} />
              </div>
            </div>
            <div className="box">
              <button className="route-button" onClick={getRoute}>
                {t('calculateRoutes')}
              </button>
            </div>
          </div>
        )}
        {state === 3 && (
          <div className="content-container-2">
            <div className="box-2">
              <h1>{t('routeCalculation')}</h1>
            </div>
            <div className="inner-box-container-2">
              <div className="inner-box-2">
                <AvailableTimeTable courses={courses} onGapClick={handleGapClick} /> {/* Use the new AvailableTimeTable component */}
              </div>
              <div className="inner-box-2">
                <RouteMap route={route} university={selectedUniversity} buildingName={buildingName} roomNumber={roomNumber} />
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
