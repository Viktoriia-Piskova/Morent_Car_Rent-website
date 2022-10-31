'use strict'
import { carsData } from './carsData.js';
import { displayCarCard } from './displayCarCard.js';
import { displayFilters } from './carsFilter.js';
import { displayReviews } from './reviews.js';
import { reviewsList } from './reviews.js';
import { addToLikedCars } from './addToLiked.js';
import { displayDetails } from './carDetails.js';

export const likedCars = [];   //list of all cars that were liked 
export const recentCars = [];

const recomendedCars = carsData;
const typesList = ['Sport', 'SUV', 'MVP', 'Sedan', 'Coupe', 'Hatchback'];  // initialised explicitly in case available filters are fetched from API
const typesContainer = document.getElementById('typeFilter');
const capacitiesList = ['2 Person', '4 Person', '6 Person', '8 or more'];
const capacityContainer = document.getElementById('capacity-container');
const reviewsContainer = document.getElementById('reviews-container')
const recomendedCarContainer = document.getElementById('recomend-car-container');
const carDetails = document.getElementById('car-details');
const recentCarList = [];
const recentCarContainer = document.getElementById('recent-car-container');

displayFilters(typesList, typesContainer);
displayFilters(capacitiesList, capacityContainer);

displayReviews(reviewsList, reviewsContainer);
carDetails.innerHTML = displayDetails(carsData[0])

recomendedCars.forEach((car) => {
    let carCard = displayCarCard(car);
    recomendedCarContainer.innerHTML += carCard;
})

let elementsArray = recomendedCarContainer.querySelectorAll(".card-img-top");
elementsArray.forEach((elem, index) => {
    elem.addEventListener("click", function () {
        carDetails.innerHTML = displayDetails(carsData[index])
        addToRecentCars(carsData[index])
    });
});

function addToRecentCars(car) {
    const recentCar = recentCarList.find(element => element.id === car.id);
    const isInList = recentCarList.indexOf(recentCar);
    if (isInList > -1) {
        recentCarList.splice(isInList, 1)
        recentCarList.unshift(car)
    } else {
        recentCarList.unshift(car);
        recentCarList.splice(3);
    }
    recentCarContainer.innerHTML = '';
    recentCarList.forEach((car) => {
        let carCard = displayCarCard(car);
        recentCarContainer.innerHTML += carCard;
    })
}


let likeBtnsArray = recomendedCarContainer.querySelectorAll(".like-btn");
likeBtnsArray.forEach((elem, index) => {
    elem.addEventListener("click", function () {
        elem.classList.toggle('active');
        addToLikedCars(carsData[index].id)
    });
});

//card[0].id

// foreach(var car in carsData){

//     disaplyCsrd(car)

//     var cardDiv =  document.getElementById('cardDivId');
//     cardDiv.addEventListener('click', () => openCar(elecar.Id)));

//     var cardDiv =  document.getElementById('cardDivId');
//     cardDiv.addEventListener('click', () => openCar(elecar.Id)));


// }

