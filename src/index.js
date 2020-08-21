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

// let icon = document.querySelector(".small-t-emoji");
// icon.innerHTML = `<img src="src/media/${response.data.weather[0].icon}.png" width="130"/>`;
//}

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

/*
function displayForecast(response) {
  let forecast = null;
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  for (let index = 1; index < 6; index++) {
    forecast = response.data.daily[index];

    forecastElement.innerHTML += `
     <div class="col forecastColumns" >
      <div class="day-1">
        ${formatForecastTime(forecast.dt * 1000)}
          <img  src="src/img/${
      forecast.weather[0].icon
      }.png" alt="" class="icon">
            <div id = "forecast-max">
            <span class="forecast-temp-max">${Math.round(
        forecast.temp.max
      )}</span>
            <span class="forecast-degree" id = "forecast-celsius" >°C</span>
            </div>
            <div id = "forecast-min">
            <span class="forecast-temp-min">${Math.round(
        forecast.temp.min
      )}</span>
            <span class="forecast-degree" >°C</span>
            </div>
            
      </div>
    </div >
  `;
  }
}

function search(city) {
  let apiKey = "4190a6ee70227a6b15b76f600409fe74";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature); */
