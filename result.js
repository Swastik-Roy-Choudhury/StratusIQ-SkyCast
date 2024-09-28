document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');
    const apiKey = "3bb9ebf8f59f055b1d13b54c394b03fa"; // Replace with your API key
    const weatherContainer = document.querySelector('.container');

    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                // Set weather details
                const icon = data.weather[0].icon;
                const temp = data.main.temp;
                const description = data.weather[0].description;
                const weatherMain = data.weather[0].main.toLowerCase();
                const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
                const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
                const feels_like = data.main.feels_like;
                const visibility = data.visibility;
                const pressure = data.main.pressure;
                const dew_point = data.main.humidity;
                const aqi = "N/A"; // Placeholder for AQI as it requires a separate API call

                document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${icon}.png`;
                document.getElementById('aqi').innerText = aqi;
                document.getElementById('sunrise').innerText = sunrise;
                document.getElementById('sunset').innerText = sunset;
                document.getElementById('feels_like').innerText = feels_like + '°C';
                document.getElementById('visibility').innerText = visibility + ' m';
                document.getElementById('pressure').innerText = pressure + ' hPa';
                document.getElementById('dew_point').innerText = dew_point + '°C';


                // Set background image based on weather condition
                setBackground(weatherMain);

                // Set hourly and daily forecasts
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
                    .then(response => response.json())
                    .then(forecastData => {
                        setHourlyForecast(forecastData);
                        setDailyForecast(forecastData);
                    });
            })
            .catch(err => {
                weatherContainer.innerHTML = `<p>Could not fetch weather data for ${city}. Please try again later.</p>`;
                console.error(err);
            });
    } else {
        weatherContainer.innerHTML = `<p>No city provided. Please go back and enter a city.</p>`;
    }

    function setBackground(weatherMain) {
        const weatherContainer = document.querySelector('body');
        let backgroundImage = '';

        switch (weatherMain) {
            case 'clear':
                backgroundImage = 'background.jpg';
                break;
            case 'clouds':
                backgroundImage = 'background.jpg';
                break;
            case 'rain':
            case 'drizzle':
            case 'thunderstorm':
                backgroundImage = 'background.jpg';
                break;
            case 'snow':
                backgroundImage = 'background.jpg';
                break;
            default:
                backgroundImage = 'background.jpg'; // Fallback image
        }

        weatherContainer.style.backgroundImage = `url('${backgroundImage}')`;
    }

    function setHourlyForecast(forecastData) {
        const hourlyForecast = document.getElementById('hourly-forecast');
        hourlyForecast.innerHTML = '';
        const hours = forecastData.list.slice(0, 5);
        hours.forEach(hour => {
            const hourElem = document.createElement('div');
            hourElem.className = 'hourly-item';
            const time = new Date(hour.dt_txt).getHours();
            hourElem.innerHTML = `<p>${time}:00</p>
                                  <img src="http://openweathermap.org/img/wn/${hour.weather[0].icon}.png" alt="Icon">
                                  <p>${hour.main.temp}°C</p>`;
            hourlyForecast.appendChild(hourElem);
        });
    }

    function setDailyForecast(forecastData) {
        const dailyForecast = document.getElementById('daily-forecast');
        dailyForecast.innerHTML = '';
        const days = [];
        forecastData.list.forEach((forecast, index) => {
            const date = new Date(forecast.dt_txt).toLocaleDateString();
            if (!days.includes(date)) {
                days.push(date);
                const dayElem = document.createElement('div');
                dayElem.className = 'daily-item';
                dayElem.innerHTML = `<p>${date}</p>
                                    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="Icon">
                                    <p>${forecast.main.temp}°C</p>`;
                dailyForecast.appendChild(dayElem);
            }
        });
    }
});

function searchAgain() {
    window.location.href = 'index.html';
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Hide code
document.addEventListener("keydown", function (event){
    if (event.ctrlKey){
       event.preventDefault();
    }
    if(event.keyCode == 123){
       event.preventDefault();
    }
});

document.addEventListener('contextmenu', 
    event => event.preventDefault()
);
