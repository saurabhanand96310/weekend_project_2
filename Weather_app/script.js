const apiKey = "130573acc059bc64f8d3016e0b5f49fe";
//const city=document.querySelector(".city-input").value

async function fetchWeatherData() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
          );
         if(!response.ok){
            throw new Error("unable the fetch api")
         }
          const data = await response.json();
          // console.log(data);
          // console.log(data.main.temp);
          // console.log(data.main.humidity);
          // console.log(data.visibility);
          // console.log(data.wind.speed);
          // console.log(data.name);
          updateWeatherUI(data);
    }
    catch(error){
        console.log(error);
    }
 
}
//fetchWeatherData();

const temp = document.getElementById("temp");
const wind = document.getElementById("speed");
const humidity = document.getElementById("humidity");
const visibility = document.getElementById("visibility");
const description = document.getElementById("description");
const date = document.getElementById("date");


function updateWeatherUI(data) {
  city.textContent = data.name;
  temp.textContent = `${Math.round(data.main.temp)}°C`;
  wind.textContent = `${data.wind.speed} km/h`;
  humidity.textContent = `${data.main.humidity} %`;
  visibility.textContent = `${data.visibility / 1000}km/h`;
  description.textContent = data.weather[0].description;
  const currentDate = new date();
  date.textContent = currentDate.toDateString();
}

const formElement = document.querySelector(".search_box");
const cityInput = document.querySelector(".city-input");
formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = cityInput.value;
  if (city !== "") {
    fetchWeatherData(city);
  }
});
