import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import UniversityInput from './components/UniversityInput/UniversityInput';
import ScheduleTable from './components/ScheduleTable/ScheduleTable';
import TimeTable from './components/TimeTable/TimeTable';
import AvailableTimeTable from './components/RouteTimeTable/RouteTimeTable';
import { useTranslation } from 'react-i18next';
import Map from './components/Map/Map';
import RouteMap from './components/RouteMap/RouteMap';
import './App.css';

const Home = ({ handleGetStarted }) => (
  <HeroSection onGetStarted={handleGetStarted} />
);

const UniversityForm = ({ handleUniversitySubmit }) => (
  <UniversityInput onSubmit={handleUniversitySubmit} />
);

const Schedule = ({ selectedUniversity, courses, setCourses, setBuildingName, setRoomNumber, getRoute, buildingName, roomNumber, t }) => {
  return (
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
  );
};

const RouteCalculation = ({ courses, handleGapClick, route, routeInfo, universityCoords, t }) => (
  <div className="content-container-2">
    <div className="box-2">
      <h1>{t('routeCalculation')}</h1>
    </div>
    <div className="inner-box-container-2">
      <div className="inner-box-2">
        <AvailableTimeTable courses={courses} onGapClick={handleGapClick} /> {/* Use the new AvailableTimeTable component */}
      </div>
      <div className="inner-box-2">
        <RouteMap route={route} routeInfo={routeInfo} universityCoords={universityCoords} /> {/* Pass the universityCoords */}
      </div>
    </div>
  </div>
);

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

const AppContent = () => {
  const { t } = useTranslation();
  const [state, setState] = useState(0); // 0: HomePage, 1: UniversityInput, 2: ScheduleTable, 3: Route Calculation
  const [courses, setCourses] = useState([]); // State to hold the courses
  const [selectedUniversity, setSelectedUniversity] = useState(''); // State to hold the selected university
  const [buildingName, setBuildingName] = useState(null);
  const [roomNumber, setRoomNumber] = useState(null); // Define roomNumber state
  const [route, setRoute] = useState(null); // State to hold the route data
  const [routeInfo, setRouteInfo] = useState(null); // State to hold the route information
  const [universityCoords, setUniversityCoords] = useState({ lat: 40.110588, lng: -88.228339 }); // Default coordinates

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/university-input');
  };

  const geocodeAddress = async (address) => {
    if (!window.google || !window.google.maps) {
      console.error('Google Maps JavaScript API is not loaded.');
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const { lat, lng } = results[0].geometry.location;
          resolve({ lat: lat(), lng: lng() });
        } else {
          reject('Geocode was not successful for the following reason: ' + status);
        }
      });
    });
  };

  const handleUniversitySubmit = async (university) => {
    setSelectedUniversity(university);
    try {
      const coords = await geocodeAddress(university);
      setUniversityCoords(coords);
    } catch (error) {
      console.error(error);
    }
    navigate('/schedule-table');
  };

  const goHome = () => {
    navigate('/');
  };

  const getRoute = () => {
    navigate('/route-calculation');
  };

  const handleGapClick = async (startBuilding, endBuilding) => {
    // Clear previous route state
    setRoute(null);
    setRouteInfo(null);

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
        const routeLeg = result.routes[0].legs[0];
        setRouteInfo({
          distance: routeLeg.distance.text,
          duration: routeLeg.duration.text,
          endLocation: routeLeg.end_location,
        });
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
        <Routes>
          <Route path="/" element={<Home handleGetStarted={handleGetStarted} />} />
          <Route path="/university-input" element={<UniversityForm handleUniversitySubmit={handleUniversitySubmit} />} />
          <Route path="/schedule-table" element={<Schedule
            selectedUniversity={selectedUniversity}
            courses={courses}
            setCourses={setCourses}
            setBuildingName={setBuildingName}
            setRoomNumber={setRoomNumber}
            getRoute={getRoute}
            buildingName={buildingName}
            roomNumber={roomNumber}
            t={t}
          />} />
          <Route path="/route-calculation" element={<RouteCalculation
            courses={courses}
            handleGapClick={handleGapClick}
            route={route}
            routeInfo={routeInfo}
            universityCoords={universityCoords}
            t={t}
          />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
