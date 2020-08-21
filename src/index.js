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

/*function displayForecastDayOne(response) {
  let dayOneBox = document.querySelector("#day-one-box");
  let celsiusMax = Math.round(response.data[0].main.temp_max);
  let celsiusMin = Math.round(response.data[0].main.temp_min);
  let emoji = Math.round(response.data.weather[0].icon);

  dayOneBox.innerHTML = `<p class="small-t-emoji"><img src="src/media/${emoji}.png"></p>
  <p>
    <span class="daytemp" id="highFiveDayTemp"> ${celsiusMax}º</span>
    <span class="nighttemp" id="lowFiveDayTemp"> | ${celsiusMin}º</span>  </p>`;
}

*/

function showForecast(response) {
  console.log(response);

  celsiusMax = response.data.main.temp_max;
  let tempMax = document.querySelector("#highFiveDayTemp");
  tempMax.innerHTML = Math.round(response.data.main.temp_max);

  celsiusMin = response.data.main.temp_min;
  let tempMin = document.querySelector("#lowFiveDayTemp");
  tempMin.innerHTML = Math.round(response.data.main.temp_min);

  let icon = document.querySelector(".small-t-emoji");
  icon.innerHTML = `<img src="src/media/${response.data.weather[0].icon}.png" width="130"/>`;
}

function searchCityForecast(city) {
  let apiKey = "1f8b7e0173439d434022d96a0701f579";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?exclude=current,hourly,minutely&q=${city}&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showForecast);
}

/*

function forecastDayOne(response) {
  let tempMax = Math.round(response.data.daily.temp.min);
  let tempMin = Math.round(response.data.daily.temp.min);
  let emoji = `<img src="src/media/${response.daily.weather[0].icon}.png" />`;

  document.querySelector(
    "#day-one-box"
  ).innerHTML = `<p class="small-t-emoji"><img src="src/media/${emoji}.png"></p>
  <p>
    <span class="daytemp" id="highFiveDayTemp"> ${tempMax}º</span>
    <span class="nighttemp" id="lowFiveDayTemp"> | ${tempMin}º</span>  </p>`;
}

function showForecastDayOne(city) {
  console.log(response);
  let apiKey = "1f8b7e0173439d434022d96a0701f579";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?q=${city}&exclude=current,minutely,hourly&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(forecastDayOne);
}*/
