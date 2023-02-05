const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '577d0e8f5cmsh9bec304960cd15ap146d89jsn9b5c65d7a33c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));