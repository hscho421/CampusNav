import React, { useEffect, useRef, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, DirectionsRenderer } from '@react-google-maps/api';
import './RouteMap.css';

const RouteMap = ({ route }) => {
  const mapRef = useRef(null); // Create a ref for the map
  const directionsRendererRef = useRef(null); // Create a ref for the DirectionsRenderer

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (route === null && directionsRendererRef.current) {
      // Clear the previous route from the map
      directionsRendererRef.current.setMap(null);
    }
  }, [route]);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className='map-div'>
      <GoogleMap
        mapContainerClassName="map-div"
        center={{ lat: 40.110588, lng: -88.228339 }} // Default center
        zoom={15}
        onLoad={onLoad} // Use useCallback for onLoad
      >
        {route && (
          <DirectionsRenderer
            directions={route}
            options={{
              draggable: false,
              suppressMarkers: false,
              polylineOptions: {
                strokeColor: 'blue',
                strokeOpacity: 1,
                strokeWeight: 10,
              },
            }}
            onLoad={(directionsRenderer) => {
              if (directionsRendererRef.current) {
                directionsRendererRef.current.setMap(null); // Clear the previous directions
              }
              directionsRendererRef.current = directionsRenderer; // Set the new directions
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default RouteMap;
