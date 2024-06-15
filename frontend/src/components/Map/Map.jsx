import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import './MapStyle.css';

const Map = ({ university }) => {
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 }); // Default center
  const [error, setError] = useState('');

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (university && isLoaded) {
      console.log('Geocoding university:', university); // Log the university name
      geocodeUniversity(university);
    }
  }, [university, isLoaded]);

  const geocodeUniversity = async (universityName) => {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(universityName)}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
    try {
      const response = await fetch(geocodeUrl);
      const data = await response.json();
      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        console.log('Geocoded location:', location); // Log the geocoded location
        setCenter({ lat: location.lat, lng: location.lng });
        setError('');
      } else {
        console.error('Geocoding API error:', data);
        setError(`Geocoding error: ${data.status}`);
      }
    } catch (error) {
      console.error('Error fetching geocoding data:', error);
      setError('Error fetching geocoding data.');
    }
  };

  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={15}
      >
      </GoogleMap>
    </div>
  );
};

export default Map;
