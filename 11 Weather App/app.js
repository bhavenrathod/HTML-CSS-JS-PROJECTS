const apiKey = "c78007a91bf67db13dd2ce15831c68b4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".searchBox input");
const searchBtn = document.querySelector(".searchBox button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weatherBox").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "assets/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "assets/clear.png";
    } else if (data.weather[0].main == "rain") {
      weatherIcon.src = "assets/rains.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "assets/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "assets/mist.png";
    }

    document.querySelector(".weatherBox").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
