const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "577d0e8f5cmsh9bec304960cd15ap146d89jsn9b5c65d7a33c",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) =>{


	fetch(
	  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city,options)
	  .then((response) => response.json())
	  .then((response) => {
	
		console.log(response)
	
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		wind_degrees.innerHTML = response.wind_degrees
	  })
	  .catch(err => console.error(err));
}

	Submit
