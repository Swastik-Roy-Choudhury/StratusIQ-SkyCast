# AUTHOR-SWASTIK ROY CHOUDHURY
#### WEBSITE LINK- https://swastik-roy-choudhury.github.io/StratusIQ-SkyCast/

### Weathoryx: Your Simple Yet Powerful Weather App!

## Introduction
Weathoryx is a web-based weather application that empowers you to access real-time weather information for any location across the globe. It leverages the OpenWeatherMap API to retrieve weather data and presents it in a user-friendly and visually appealing manner.

## Key Features
 City Search: Effortlessly find weather details for any location by entering its name in the search bar.
Real-time Weather Data: Stay informed with current weather conditions like temperature, humidity, wind speed, and more.
Hourly Forecast: Plan your day effectively with detailed weather predictions for the next few hours.
Daily Forecast: Get a glimpse into the upcoming days' weather patterns to make informed decisions.
Dark Mode: Switch to a dark theme for enhanced visibility in low-light environments.
Responsive Design: Enjoy a seamless experience on various devices as the app adapts to different screen sizes.

## Technology Stack
 HTML: Defines the structure and layout of the web pages.
CSS: Applies styles and formatting for visual appeal.
JavaScript: Handles client-side logic and user interactions.
OpenWeatherMap API: Fetches weather data to power the application.

## Code Structure
The project is organized into the following files:
index.html: The main HTML file serving as the entry point for the application.
index.css: Contains the CSS styles for the index.html page.
index.js: JavaScript file that handles user interactions and city search functionality on the index.html page.
result.html: The HTML file displaying weather details for the searched city.
result.css: Contains the CSS styles for the result.html page.
result.js: JavaScript file responsible for fetching weather data, updating the UI, and handling user interactions on the result.html page.

## Workflow
 User Enters a City Name: The user types a city name in the search field on the index.html page and clicks the "Search" button.
City Search: The searchCity() function in index.js is triggered. It validates the input and redirects the user to the result.html page with the city name included as a query parameter.
Fetching Weather Data: Upon loading result.html, the function document.addEventListener("DOMContentLoaded", function () { ... }) in result.js executes. It retrieves the city name from the URL parameters and utilizes the OpenWeatherMap API to fetch weather data.
Updating UI: Fetched weather data is used to populate the UI elements on the result.html page, displaying current weather conditions, hourly forecast, and daily forecast.
User Interactions: Users have the option to click the "Another City?" button to return to the index.html page or the "Dark Mode" button to toggle the theme.


## Code Snippets
index.html:
HTML
<input type="text" id="city" placeholder="Enter city name">
<button onclick="searchCity()">Search</button>
index.js:
JavaScript
function searchCity() {
  const city = document.getElementById('city').value;
  if (city) {
    window.location.href = `result.html?city=${city}`;
  } else {
    alert("Please enter a city name.");
  }
}
result.js:
JavaScript
fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric)
  .then(response => response.json())
  .then(data => {
    // Set    weather details
    const icon = data.weather[0].icon;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    // ... other details

    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${icon}.png`;
    // ... update other UI elements
  })


This documentation provides a comprehensive overview of the Weathoryx app's structure, functionality, and code implementation.
