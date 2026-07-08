const modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", async () => {

    const cityInput = document.getElementById("city-input").value;

    const apiKey = "3bdfc7154dc151df5562521cbb8e73a0";

    const apiURL =
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(apiURL);

        const data = await response.json();

        console.log(data);

        if (data.cod == "404") {

            alert("City not found!");

            return;

        }

        document.getElementById("city").innerText =
        data.name;

        document.getElementById("temperature").innerText =
        `Temperature: ${data.main.temp}°C`;

        document.getElementById("humidity").innerText =
        `Humidity: ${data.main.humidity}%`;

        document.getElementById("wind").innerText =
        `Wind Speed: ${data.wind.speed} km/h`;

        let weatherCondition = data.weather[0].main;

        let emoji = "☀️";

        if(weatherCondition == "Clouds"){
            emoji = "☁️";
        }

        else if(weatherCondition == "Rain"){
            emoji = "🌧️";
        }

        else if(weatherCondition == "Thunderstorm"){
            emoji = "⛈️";
        }

        else if(weatherCondition == "Snow"){
            emoji = "❄️";
        }

        document.getElementById("description").innerText =
        `${emoji} Weather: ${data.weather[0].description}`;

        const today = new Date();

        document.getElementById("date").innerText =
        today.toDateString();

        if(weatherCondition == "Clouds"){

            document.body.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda')";

        }

        else if(weatherCondition == "Rain"){

            document.body.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1515694346937-94d85e41e6f0')";

        }

        else{

            document.body.style.backgroundImage =
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')";

        }

    }

    catch (error) {

        alert("Weather data not found!");

    }

});