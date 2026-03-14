const input = document.getElementById("input-area");
const searchBtn = document.getElementById("search-btn");
const weatherInfo = document.getElementById("weather-info");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const errorMassage = document.getElementById("error-massage");

 const API_KEY = "04b7afa2009cfdd91b44e48abf7e8b08";

 searchBtn.addEventListener('click',async()=>{
    const city =input.value.trim()
    if(!city)return
    
    try {
      const weatherData = await getFetchData(city)
      displayData(weatherData)
    } catch (error) {
        showError();
    }
    input.value = ''
 })

 input.addEventListener('keydown',(e)=>{
    if (e.key === 'Enter') {
        searchBtn.click()
    }
 })

async function getFetchData(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(URL)
    console.log(response);
    if(!response.ok){
        throw new Error('could not find the city')
    }
    
    const data =await response.json()
    return data
    
 }

function displayData(weatherData) {
    console.log(weatherData);
    
  const { name } = weatherData;
  const { temp } = weatherData.main;
  const { description: weatherDesc } = weatherData.weather[0];

  const tempC = (temp - 273.15).toFixed(1);

  cityName.textContent = name;
  temperature.textContent = `${tempC}°C`;
  description.textContent = weatherDesc;

  weatherInfo.classList.remove("hidden");
}

 function showError() {
    weatherInfo.classList.add('hidden')
    errorMassage.classList.remove('hidden')
    
 }