console.log('connection successful');

let pickBtn = document.querySelector('.picker');
let restaurants = document.querySelectorAll('.res');

console.log(restaurants);

function pickRestaurant(event){
    alert(`Try ` +  restaurants[Math.floor(Math.random() * restaurants.length)]);
}

// for(i=0;i<restaurants.length;i++){
    pickBtn.addEventListener('click', pickRestaurant)
// }