import { useEffect } from "react";
import { useState } from "react";

function useCurrentLocation() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState(null);

 function handleLocation(){
  setLocation(null)
  setLoading(false)
  setError(null)

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLoading(true)
        setTimeout(() => {

          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
          setLoading(false)
        }, 3000);
      },
      (error) => {
        setError(error.message)
        setLocation({
          latitude: null,
          longitude: null,
          error: error.message,
        });

      }
    );
    setLoading(false)
  } else {
    setError({ error: "Geolocation is not supported by this browser." })
    setLocation({
      latitude: null,
      longitude: null,
      error: "Geolocation is not supported by this browser.",
    });
  }
 }


  // useEffect(() => {
  //   handleLocation()
  // }, []);


  return {
    location,
    loading,
    error,
    handleLocation,
  }
}

export default useCurrentLocation
