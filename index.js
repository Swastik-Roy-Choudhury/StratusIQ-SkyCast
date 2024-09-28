function searchCity() {
    const city = document.getElementById('city').value;
    if (city) {
        window.location.href = `result.html?city=${city}`;
    } else {
        alert("Please enter a city name.");
    }
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
  