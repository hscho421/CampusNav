import { useLoadScript } from '@react-google-maps/api';

const libraries = ['marker'];

const useGoogleMaps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  return { isLoaded, loadError };
};

export default useGoogleMaps;
