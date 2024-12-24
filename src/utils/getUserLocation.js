export function getUserLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        callback({ latitude, longitude });
      },
      (error) => {
        console.error('Error getting location:', error.message);
        callback(null);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
    callback(null);
  }
}
