const request = require('request');

module.exports.getPlaces = function() {
	return new Promise(function(resolve) {
		request.get('https://api.meteo.lt/v1/places').then(response => {
			let places = JSON.parse(response.body);

			resolve(places);
		});
	});
}

module.exports.getPlaceForecasts = function() {
	return new Promise(function(resolve) {
		request.get(`https://api.meteo.lt/v1/places/Kaunas/forecasts/long-term`).then(response => {
			let placesInfo = JSON.parse(response.body);

			resolve(placesInfo);
		});
	});
	
}