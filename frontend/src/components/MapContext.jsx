import React, { createContext, useState, useContext } from 'react';

const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });

  return (
    <MapContext.Provider value={{ center, setCenter }}>
      {children}
    </MapContext.Provider>
  );
};

export const useMap = () => useContext(MapContext);
