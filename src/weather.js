function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherCity.innerHTML = data.name;
      weatherName.innerHTML = data.weather[0].main;
    });
}

function onGeoError() {
  alert(MESSAGE_GEOERROR);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
