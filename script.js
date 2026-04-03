        const searchbtn = document.getElementById("search-btn")
        const cityinput = document.getElementById("search-city")

        searchbtn.addEventListener("click", getweather)

        async function getweather() {
            const city = cityinput.value

            const apikey = "332b891fce6ac334d826fd7bec781982"

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`

            const response = await fetch(url)

            const data = await response.json()

            console.log(data)
            

            if (city === "") {
                alert("Please enter a city name")
                return
            }

            if (data.cod === "404") {
                alert("city not found")
                return
            }

            cityinput.value = ""

            document.getElementById("city-name-show").textContent = data.name

            document.getElementById("tem-show").textContent = "Temperature: " + data.main.temp + "°C"
            document.getElementById("hum-show").textContent = "Humidity: " + data.main.humidity + "%"
            document.getElementById("wind-show").textContent = "Wind: " + data.wind.speed + " km/h"

            document.getElementById("icon-show").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        }

        cityinput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                getweather()
            }
        })