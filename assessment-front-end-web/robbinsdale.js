console.log('connection successful');

let pickBtn = document.querySelector('.picker');
let restaurants = document.querySelectorAll('.res');
let resPick = ['Broadway Pizza', `Marna's Eatery`, `Athen's Cafe`, 'Birdhouse Eat & Drink', `Mama Lupita's Cafe and Grill`]

console.log(restaurants);

function pickRestaurant(event){
    alert(`Try ` +  resPick[Math.floor(Math.random() * resPick.length)]);
}

// for(i=0;i<restaurants.length;i++){
    pickBtn.addEventListener('click', pickRestaurant)
// }