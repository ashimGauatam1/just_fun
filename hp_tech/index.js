function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '2ac204491166a7260f1f578ff4ce2ede';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}

function displayWeather(data) {
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = ''; 

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    const weatherHTML = `
        <div class="day">
            <h2>${cityName}</h2>
            <img src="${icon}" alt="${description}">
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
        </div>
    `;

    forecastDiv.innerHTML = weatherHTML;
}
