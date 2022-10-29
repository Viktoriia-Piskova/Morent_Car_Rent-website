//import { carsData } from "./carsData.js";
const likedCars = [];


function addToLikedCars(){
    let icon = document.querySelector('.like-btn');
    icon.onclick = function(){
    icon.classList.toggle('active');
}
}