function formatDate() {
  let currentDate = new Date();
  let date = currentDate.getDate();
  let hours = currentDate.getHours(0, 0, 0, 0);
  let minutes = currentDate.getMinutes();
  let year = currentDate.getFullYear();

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDate.getDay()];

  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[currentDate.getMonth()];

  let h2 = document.querySelector("#todays-date");

  let currentTimeDate = `Today ${hours}:${minutes} | ${day} ${date} ${month} ${year}`;
  h2.innerHTML = currentTimeDate;

  return currentTimeDate;
}
console.log(formatDate(new Date()));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function formatOneDay() {
  let currentDate = new Date();
  let boxOne = new Date(currentDate);
  boxOne.setDate(currentDate.getDate() + 1);

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayOne = days[boxOne.getDay()];
  let dateOne = boxOne.getDate();

  let boxDayOne = document.querySelector("#day-one");
  let dayOneDate = `${dayOne} ${dateOne}`;
  boxDayOne.innerHTML = dayOneDate;

  return dayOneDate;
}
console.log(formatOneDay());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function formatTwoDay() {
  let currentDate = new Date();
  let boxTwo = new Date(currentDate);
  boxTwo.setDate(currentDate.getDate() + 2);

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayTwo = days[boxTwo.getDay()];
  let dateTwo = boxTwo.getDate();

  let boxDayTwo = document.querySelector("#day-two");
  let dayTwoDate = `${dayTwo} ${dateTwo}`;
  boxDayTwo.innerHTML = dayTwoDate;

  return dayTwoDate;
}
console.log(formatTwoDay());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function formatThreeDay() {
  let currentDate = new Date();
  let boxThree = new Date(currentDate);
  boxThree.setDate(currentDate.getDate() + 3);

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayThree = days[boxThree.getDay()];
  let dateThree = boxThree.getDate();

  let boxDayThree = document.querySelector("#day-three");
  let dayThreeDate = `${dayThree} ${dateThree}`;
  boxDayThree.innerHTML = dayThreeDate;

  return dayThreeDate;
}
console.log(formatThreeDay());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function formatFourDay() {
  let currentDate = new Date();
  let boxFour = new Date(currentDate);
  boxFour.setDate(currentDate.getDate() + 4);

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayFour = days[boxFour.getDay()];
  let dateFour = boxFour.getDate();

  let boxDayFour = document.querySelector("#day-four");
  let dayFourDate = `${dayFour} ${dateFour}`;
  boxDayFour.innerHTML = dayFourDate;

  return dayFourDate;
}
console.log(formatFourDay());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function formatFiveDay() {
  let currentDate = new Date();
  let boxFive = new Date(currentDate);
  boxFive.setDate(currentDate.getDate() + 5);

  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayFive = days[boxFive.getDay()];
  let dateFive = boxFive.getDate();

  let boxDayFive = document.querySelector("#day-five");
  let dayFiveDate = `${dayFive} ${dateFive}`;
  boxDayFive.innerHTML = dayFiveDate;

  return dayFiveDate;
}
console.log(formatFiveDay());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function showWeather(response) {
  console.log(response);
  document.querySelector("h1").innerHTML = response.data.name;

  let temperature = Math.round(response.data.main.temp);
  let actualWeatherLocation = document.querySelector("#main-temperature");
  actualWeatherLocation.innerHTML = `${temperature}`;

  celsiusMax = response.data.main.temp_max;
  let tempMax = document.querySelector("#high-temp");
  tempMax.innerHTML = Math.round(response.data.main.temp_max);

  celsiusMin = response.data.main.temp_min;
  let tempMin = document.querySelector("#low-temp");
  tempMin.innerHTML = Math.round(response.data.main.temp_min);

  celsiusTemperature = response.data.main.temp;

  let description = document.querySelector("#desWea");
  description.innerHTML = response.data.weather[0].description;

  let inspectWind = response.data.wind.speed;
  let realWind = document.querySelector("#wind");
  realWind.innerHTML = `${inspectWind}`;

  let inspectHumidity = response.data.main.humidity;
  let realHumidity = document.querySelector("#humidity");
  realHumidity.innerHTML = `${inspectHumidity}`;

  let icon = document.querySelector("#icon");
  icon.innerHTML = `<img src="src/media/${response.data.weather[0].icon}.png" width="130"/>`;

  let background = document.querySelector("#video");
  background.innerHTML = `<video autoplay loop muted id="vids"><source src="src/media/${response.data.weather[0].icon}.mp4" type="video/mp4" /></video>`;

  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let apiKey = "1f8b7e0173439d434022d96a0701f579";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response);
  let forecast = null;
  let forecastElementOne = document.querySelector("#day-one-box");
  forecastElementOne.innerHTML = null;
  for (let index = 1; index < 2; index++) {
    forecast = response.data.daily[index];

    forecastElementOne.innerHTML += `
    <p class="small-t-emoji">
    <img  src="src/media/${forecast.weather[0].icon}.png" alt="" class="emoji">
    </p>
    <p>
    <span class="daytemp" id="highFiveDayTemp"> ${Math.round(
      forecast.temp.max
    )}</span>º|
    <span class="nighttemp" id="lowFiveDayTemp"> ${Math.round(
      forecast.temp.min
    )}</span><span class="nightdegree">º</span>
    </p>`;
  }

  let forecastElementTwo = document.querySelector("#day-two-box");
  forecastElementTwo.innerHTML = null;
  for (let index = 2; index < 3; index++) {
    forecast = response.data.daily[index];

    forecastElementTwo.innerHTML += `
    <p class="small-t-emoji">
    <img  src="src/media/${forecast.weather[0].icon}.png" alt="" class="emoji">
    </p>
    <p>
    <span class="daytemp" id="highFiveDayTemp"> ${Math.round(
      forecast.temp.max
    )}</span>º|
    <span class="nighttemp" id="lowFiveDayTemp"> ${Math.round(
      forecast.temp.min
    )}</span><span class="nightdegree">º</span>
    </p>`;
  }

  let forecastElementThree = document.querySelector("#day-three-box");
  forecastElementThree.innerHTML = null;
  for (let index = 3; index < 4; index++) {
    forecast = response.data.daily[index];

    forecastElementThree.innerHTML += `
    <p class="small-t-emoji">
    <img  src="src/media/${forecast.weather[0].icon}.png" alt="" class="emoji">
    </p>
    <p>
    <span class="daytemp" id="highFiveDayTemp"> ${Math.round(
      forecast.temp.max
    )}</span>º|
    <span class="nighttemp" id="lowFiveDayTemp"> ${Math.round(
      forecast.temp.min
    )}</span><span class="nightdegree">º</span>
    </p>`;
  }
  let forecastElementFour = document.querySelector("#day-four-box");
  forecastElementFour.innerHTML = null;
  for (let index = 4; index < 5; index++) {
    forecast = response.data.daily[index];

    forecastElementFour.innerHTML += `
    <p class="small-t-emoji">
    <img  src="src/media/${forecast.weather[0].icon}.png" alt="" class="emoji">
    </p>
    <p>
    <span class="daytemp" id="highFiveDayTemp"> ${Math.round(
      forecast.temp.max
    )}</span>º|
    <span class="nighttemp" id="lowFiveDayTemp"> ${Math.round(
      forecast.temp.min
    )}</span><span class="nightdegree">º</span>
    </p>`;
  }
  let forecastElementFive = document.querySelector("#day-five-box");
  forecastElementFive.innerHTML = null;
  for (let index = 5; index < 6; index++) {
    forecast = response.data.daily[index];

    forecastElementFive.innerHTML += `
    <p class="small-t-emoji">
    <img  src="src/media/${forecast.weather[0].icon}.png" alt="" class="emoji">
    </p>
    <p>
    <span class="daytemp" id="highFiveDayTemp"> ${Math.round(
      forecast.temp.max
    )}</span>º|
    <span class="nighttemp" id="lowFiveDayTemp"> ${Math.round(
      forecast.temp.min
    )}</span><span class="nightdegree">º</span>
    </p>`;
  }
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  searchCity(city);
}

function searchCity(city) {
  let apiKey = "1f8b7e0173439d434022d96a0701f579";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showWeather);
}

function myLocation(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "1f8b7e0173439d434022d96a0701f579";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showWeather);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(myLocation);
}

let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition);

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//(0°C × 9/5) + 32 = 32°F
let celsiusTemperature = null;
let celsiusMax = null;
let celsiusMin = null;

function displayFahTemp(event) {
  event.preventDefault();

  let fahrenheitTemperature = Math.round((celsiusTemperature * 9) / 5 + 32);
  let currentCelsius = document.querySelector("#main-temperature");
  currentCelsius.innerHTML = fahrenheitTemperature;

  let fahrenheitMax = Math.round((celsiusMax * 9) / 5 + 32);
  let tempMax = document.querySelector("#high-temp");
  tempMax.innerHTML = fahrenheitMax;

  let fahrenheitMin = Math.round((celsiusMin * 9) / 5 + 32);
  let fahrMin = document.querySelector("#low-temp");
  fahrMin.innerHTML = fahrenheitMin;

  let celsiusSymbol = document.querySelector("#celsius-symbol");
  celsiusSymbol.innerHTML = " °F";

  let celsiusSymbolLow = document.querySelector("#celsius-symbol-low");
  celsiusSymbolLow.innerHTML = " °F";

  let forecastFiveDaysHigh = document.querySelectorAll("#highFiveDayTemp");
  forecastFiveDays.forEach(function (item) {
    let currentTemp = days.innerHTML;
    days.innerHTML = Math.round((currentTemp * 9) / 5 + 32);
  });

  let forecastFiveDaysLow = document.querySelectorAll("#lowFiveDayTemp");
  forecastFiveDaysLow.forEach(function (item) {
    let currentTemp = item.innerHTML;
    item.innerHTML = Math.round((currentTemp * 9) / 5 + 32);
  });

  forecastMax = celsiusConverter.classList.remove("active");
  fahrenheitConverter.classList.add("active");
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahTemp);

/*



function showFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemperature = Math.round((celsiusTemperature * 9) / 5 + 32);
  let currentCelsius = document.querySelector("#temperature");
  currentCelsius.innerHTML = fahrenheitTemperature;
  let fahrenheitMax = Math.round((celsiusMax * 9) / 5 + 32);
  let tempMax = document.querySelector("#max-temp");
  tempMax.innerHTML = fahrenheitMax;
  let maxSymbol = document.querySelector("#celsius-max");
  maxSymbol.innerHTML = "°F";
  let fahrenheitMin = Math.round((celsiusMin * 9) / 5 + 32);
  let fahrMin = document.querySelector("#min-temp");
  fahrMin.innerHTML = fahrenheitMin;
  let minSymbol = document.querySelector("#celsius-min");
  minSymbol.innerHTML = "°F";

  let forecastItems = document.querySelectorAll(".forecast-temp-max");
  forecastItems.forEach(function (item) {
    let currentTemp = item.innerHTML;
    // grabbing the current value to convert--
    // convert to Fahrenheit
    item.innerHTML = Math.round((currentTemp * 9) / 5 + 32);
  });

  let forecastItemsMin = document.querySelectorAll(".forecast-temp-min");
  forecastItemsMin.forEach(function (item) {
    let currentTemp = item.innerHTML;
    // grabbing the current value to convert---
    // convert to Fahrenheit
    item.innerHTML = Math.round((currentTemp * 9) / 5 + 32);
  });

  let forecastCelsiusSymbol = document.querySelectorAll(".forecast-degree");
  forecastCelsiusSymbol.forEach(function (item) {
    item.innerHTML = `°F`;
  });

  forecastMax = celsiusConverter.classList.remove("active");
  fahrenheitConverter.classList.add("active");
}

function showCelsius(event) {
  event.preventDefault();
  let currentCelsius = document.querySelector("#temperature");
  currentCelsius.innerHTML = Math.round(celsiusTemperature);
  let tempMax = document.querySelector("#max-temp");
  tempMax.innerHTML = Math.round(celsiusMax);
  let maxSymbol = document.querySelector("#celsius-max");
  maxSymbol.innerHTML = "°C";
  let tempMin = document.querySelector("#min-temp");
  tempMin.innerHTML = Math.round(celsiusMin);
  let minSymbol = document.querySelector("#celsius-min");
  minSymbol.innerHTML = "°C";

  let forecastItems = document.querySelectorAll(".forecast-temp-max");
  forecastItems.forEach(function (item) {
    let currentTemp = item.innerHTML;
    // grabbing the current value to convert---
    // convert to Celsius
    item.innerHTML = Math.round(((currentTemp - 32) * 5) / 9);
  });

  let forecastItemsMin = document.querySelectorAll(".forecast-temp-min");
  forecastItemsMin.forEach(function (item) {
    let currentTemp = item.innerHTML;
    // grabbing the current value to convert--
    // convert to Fahrenheit
    item.innerHTML = Math.round(((currentTemp - 32) * 5) / 9);
  });

  let forecastFahrenheitSymbol = document.querySelectorAll(".forecast-degree");
  forecastFahrenheitSymbol.forEach(function (item) {
    item.innerHTML = `°C`;
  });

  fahrenheitConverter.classList.remove("active");
  celsiusConverter.classList.add("active");
}

let fahrenheitConverter = document.querySelector("#fahrenheit");
fahrenheitConverter.addEventListener("click", showFahrenheit);

let celsiusConverter = document.querySelector("#celsius");
celsiusConverter.addEventListener("click", showCelsius);

let button = document.querySelector("#location");
button.addEventListener("click", showLocation);

let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", handleSubmit); */
