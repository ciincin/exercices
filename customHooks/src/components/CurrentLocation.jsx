import useCurrentLocation from "./useCurrentLocation";

function CurrentLocation() {
  const { location, loading, error, handleLocation } = useCurrentLocation();
  return (
    <div>
      <h1>Geolocation</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {location &&  <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      }
      <button onClick={handleLocation}>Click to add location</button>
      
    </div>
  );
}

export default CurrentLocation;
