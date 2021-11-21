import { create } from 'lodash';
import debounce from 'lodash.debounce';



let targetButton = document.querySelector('.more-cities-btn');

let createCard = function(cityName) {
	window.onload = (fetch(`/weather/places/${cityName}/forecasts/long-term`).then(
		res => {
			res.json().then(
				data => {
					let NewCard = document.createElement('div');
					let TargetCardDiv = document.querySelector('.card-group');
					NewCard.classList.add('card');
					NewCard.innerHTML = 
			
					` <div class="card-body">
					<h5 class="card-title position-absolute start-50">${cityName}</h5>
					<p class="card-text ms-5 card-temp-inside">Temperature : ${data.forecastTimestamps[2].airTemperature}</p>
					<p class="card-text ms-5">Wind speed : ${data.forecastTimestamps[2].windSpeed} m/s</p>
					<p class="card-text ms-5">Weather conditions : ${data.forecastTimestamps[2].conditionCode}</p>			
					</div>`;
	
	
			TargetCardDiv.appendChild(NewCard);
		})}));
}

createCard('Vilnius');
createCard('Kaunas');
createCard('Klaipeda')

const placeInput = document.querySelector('#place');
const placeSuggestions = document.querySelector('#place-suggestions');

placeInput.addEventListener('input', debounce(function() {
	fetch(`/weather/places/find/${this.value}`).then(r => r.json()).then(places => {
		placeSuggestions.innerHTML = '';

		for (let place of places) {
			let button = document.createElement('button');

			button.addEventListener('click', function() {
				button.classList.add('active');

				setTimeout(() => {
					placeSuggestions.innerHTML = '';
				}, 100);

				placeInput.value = place.name;

			});

			button.classList.add('list-group-item', 'list-group-item-action');

			button.innerText = place.name;

			placeSuggestions.appendChild(button);


			
		}
	});
}, 500));


targetButton.addEventListener('click', function(){
	createCard(placeInput.value);
});



