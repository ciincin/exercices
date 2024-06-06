import useCurrentLocation from "./useCurrentLocation";

function CurrentLocation() {
  const { latitude, longitude, error } = useCurrentLocation();
  return (
    <div>
      <h1>Geolocation</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </div>
  );
}

export default CurrentLocation;
