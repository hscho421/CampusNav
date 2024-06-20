import React, { useEffect, useRef, useCallback, useState } from 'react';
import { GoogleMap, DirectionsRenderer, InfoWindow } from '@react-google-maps/api';
import { useTranslation } from 'react-i18next';
import useGoogleMaps from '../UseGoogleMaps';
import './RouteMap.css';

const RouteMap = ({ route, routeInfo, universityCoords }) => {
  const { t } = useTranslation();
  const mapRef = useRef(null); // Create a ref for the map
  const directionsRendererRef = useRef(null); // Create a ref for the DirectionsRenderer
  const [showInfoWindow, setShowInfoWindow] = useState(false); // State to manage InfoWindow visibility
  const markerRef = useRef(null); // Create a ref for the Marker

  const { isLoaded, loadError } = useGoogleMaps();

  useEffect(() => {
    if (route === null && directionsRendererRef.current) {
      directionsRendererRef.current.setMap(null);
      setShowInfoWindow(false);
    }
  }, [route]);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setCenter(universityCoords);

      // Create and place an AdvancedMarkerElement
      if (!markerRef.current) {
        markerRef.current = new google.maps.marker.AdvancedMarkerElement({
          map: mapRef.current,
          position: universityCoords,
        });
      } else {
        markerRef.current.position = universityCoords;
      }
    }
  }, [universityCoords]);

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
        center={universityCoords}
        zoom={15}
        onLoad={onLoad}
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
                directionsRendererRef.current.setMap(null);
              }
              directionsRendererRef.current = directionsRenderer;
              setShowInfoWindow(true);
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
