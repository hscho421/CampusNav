import React, { useEffect, useState, useRef, useCallback } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useMap } from '../MapContext'; // Import the useMap hook
import useGoogleMaps from '../UseGoogleMaps';
import './MapStyle.css';

const Map = ({ university, buildingName, roomNumber }) => {
  const { center, setCenter } = useMap(); // Use the context to get and set center coordinates
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [error, setError] = useState('');
  const mapRef = useRef(null); // Create a ref for the map

  const { isLoaded, loadError } = useGoogleMaps();

  useEffect(() => {
    if (university && isLoaded) {
      geocodeLocation(university);
    }
  }, [university, isLoaded]);

  useEffect(() => {
    if (buildingName && isLoaded) {
      geocodeLocation(`${buildingName}, ${university}`);
    }
  }, [buildingName, university, isLoaded]);

  const geocodeLocation = async (locationName) => {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(locationName)}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`;
    try {
      const response = await fetch(geocodeUrl);
      const data = await response.json();
      if (data.status === 'OK') {
        const location = data.results[0].geometry.location;
        setCenter({ lat: location.lat, lng: location.lng });
        setSelectedLocation({ lat: location.lat, lng: location.lng });
        setError('');
        if (mapRef.current) {
          mapRef.current.panTo({ lat: location.lat, lng: location.lng });
          if (buildingName) {
            mapRef.current.setZoom(18);
          } else {
            fitBoundsToLocation(data.results[0].geometry.viewport);
          }
        }
      } else {
        setError(`Geocoding error: ${data.status}`);
      }
    } catch (error) {
      setError('Error fetching geocoding data.');
    }
  };

  const fitBoundsToLocation = (viewport) => {
    if (mapRef.current) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(new window.google.maps.LatLng(viewport.northeast.lat, viewport.northeast.lng));
      bounds.extend(new window.google.maps.LatLng(viewport.southwest.lat, viewport.southwest.lng));
      mapRef.current.fitBounds(bounds);
    }
  };

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handleInfoWindowClose = () => {
    setSelectedLocation(null);
  };

  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <GoogleMap
        className="map-div"
        mapContainerClassName="map-div"
        center={center}
        zoom={15}
        onLoad={onLoad}
      >
        {selectedLocation && (
          <InfoWindow
            position={selectedLocation}
            onCloseClick={handleInfoWindowClose}
          >
            <div className='location-info'>
              <h2>Location Information</h2>
              <p>{buildingName} {roomNumber}</p>
              <p>{university}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  );
};

export default Map;
