window.axios = require('axios');
window.bootstrap = require('bootstrap');

import './places.js';

let MoreCitiesBtn = document.querySelector('.more-cities-btn');
let TargetCardDiv = document.querySelector('.card-group');



MoreCitiesBtn.addEventListener('click', function(){
    for (let i = 0; i < 3; i++) {
        let NewCard = document.createElement('div');
        NewCard.classList.add('card');
        NewCard.innerHTML = 
        
            ` <div class="card-body">
            <h5 class="card-title position-absolute start-50">Vilnius</h5>
            <p class="card-text ms-5 card-temp-inside">Temperatūra : </p>
            <p class="card-text ms-5">Vėjo greitis : </p>
            <p class="card-text ms-5">Oro salygos : </p>			
            </div>`;


        TargetCardDiv.appendChild(NewCard);
        
    }
        
    
});
