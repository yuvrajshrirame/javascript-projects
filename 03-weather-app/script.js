// CREDITS: API --> OpenWeatherMap

const API_KEY = "ee6ddca1789e35f93d8ed6e969715170";
const API = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherImage = document.querySelector(".weatherIcon");

async function checkWeather(city) {
    const response = await fetch(API + city + `&appid=${API_KEY}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherImage.src = "./assets/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherImage.src = "./assets/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherImage.src = "./assets/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherImage.src = "./assets/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherImage.src = "./assets/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherImage.src = "snow";
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}

searchButton.addEventListener("click", () => {
    checkWeather(search.value);
})