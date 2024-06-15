import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './MapStyle.css';

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerClassName="map-container"
        center={center}
        zoom={10}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
