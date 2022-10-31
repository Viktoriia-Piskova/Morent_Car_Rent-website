'use strict'
import { allCapacities, allTypes, reviewsList, allCars} from './data.js';
import { displayCarCard, displayDetails, displayFilters, showFilters, displayReviews, initCars } from './services/displayService.js';
import { addToLikedCars } from './services/addToLikedService.js';
import { changeTypeFilter, changeCapacityFilter } from './services/filterService.js';

const recentCarList = [];
const typesContainer = document.getElementById('typeFilter');
const capacityContainer = document.getElementById('capacity-container');
const reviewsContainer = document.getElementById('reviews-container')
const recomendedCarContainer = document.getElementById('recomend-car-container');
const carDetails = document.getElementById('car-details');
const recentCarContainer = document.getElementById('recent-car-container');
const showFiltersButton = document.getElementById('filter-button');

displayFilters(allTypes, typesContainer);
displayFilters(allCapacities, capacityContainer);
displayReviews(reviewsList, reviewsContainer);
initCars(allCars)

carDetails.innerHTML = displayDetails(allCars[0])
showFiltersButton.addEventListener('click', showFilters)

let elementsArray = recomendedCarContainer.querySelectorAll(".card-img-top");
elementsArray.forEach((elem, index) => {
    elem.addEventListener("click", function () {
        carDetails.innerHTML = displayDetails(allCars[index])
        addToRecentCars(allCars[index])
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
        addToLikedCars(allCars, allCars[index].id)
    });
});

const typeFilterInputs = document.getElementById('typeFilter');
const typeInputs = typeFilterInputs.querySelectorAll('input')
const capacityFilterInputs = document.getElementById('capacity-container');
const capacityInputs = capacityFilterInputs.querySelectorAll('input')

typeInputs.forEach(input => {
    input.addEventListener('change', event => changeTypeFilter(event))
}) 

capacityInputs.forEach(input => {
    input.addEventListener('change', event => changeCapacityFilter(event))
}) 