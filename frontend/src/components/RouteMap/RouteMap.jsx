import React, { useEffect, useRef, useCallback, useState } from 'react';
import { GoogleMap, useLoadScript, DirectionsRenderer, InfoWindow } from '@react-google-maps/api';
import { useTranslation } from 'react-i18next';
import './RouteMap.css';

const RouteMap = ({ route, routeInfo }) => {
  const { t } = useTranslation();
  const mapRef = useRef(null); // Create a ref for the map
  const directionsRendererRef = useRef(null); // Create a ref for the DirectionsRenderer
  const [showInfoWindow, setShowInfoWindow] = useState(false); // State to manage InfoWindow visibility

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (route === null && directionsRendererRef.current) {
      // Clear the previous route from the map
      directionsRendererRef.current.setMap(null);
      setShowInfoWindow(false);
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
                strokeOpacity: 0.8,
                strokeWeight: 5,
              },
            }}
            onLoad={(directionsRenderer) => {
              if (directionsRendererRef.current) {
                directionsRendererRef.current.setMap(null); // Clear the previous directions
              }
              directionsRendererRef.current = directionsRenderer; // Set the new directions
              setShowInfoWindow(true); // Show the InfoWindow when the route is loaded
            }}
          />
        )}
        {showInfoWindow && routeInfo && (
          <InfoWindow position={routeInfo.endLocation} onCloseClick={() => setShowInfoWindow(false)}>
            <div className='route-info'>
              <p>{t("distance")}: {routeInfo.distance}</p>
              <p>{t("duration")}: {routeInfo.duration}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default RouteMap;
