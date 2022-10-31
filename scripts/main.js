'use strict'
import { allCars } from './carsData.js';
import { allCapacities, allTypes, reviewsList } from './data.js';
import { displayCarCard, displayDetails, displayFilters, showFilters, displayReviews } from './services/displayService.js';
import { addToLikedCars } from './addToLiked.js';

const recentCars = [];
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

carDetails.innerHTML = displayDetails(allCars[0])
showFiltersButton.addEventListener('click', showFilters)

function initCars(cars){
    recomendedCarContainer.innerHTML = ''
    cars.forEach((car) => {
        let carCard = displayCarCard(car);
        recomendedCarContainer.innerHTML += carCard;
})}

initCars(allCars)

// allCars.forEach((car) => {
//     let carCard = displayCarCard(car);
//     recomendedCarContainer.innerHTML += carCard;
// })


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
        addToLikedCars(allCars[index].id)
    });
});



const typeFilterInputs = document.getElementById('typeFilter');
const typeInputs = typeFilterInputs.querySelectorAll('input')
const capacityFilterInputs = document.getElementById('capacity-container');
const capacityInputs = capacityFilterInputs.querySelectorAll('input')

const currentTypeFilters = []
const currentCapacityFilters = []

typeInputs.forEach(input => {
    input.addEventListener('change', function(event){
        const existiningIndex = currentTypeFilters.indexOf(event.target.id);
        if (existiningIndex > -1) {
            currentTypeFilters.splice(existiningIndex, 1)
        } else {
            currentTypeFilters.push(event.target.id);
        }
        filterCars()
    })
}) 

capacityInputs.forEach(input => {
    input.addEventListener('change', function(event){
        const existiningIndex = currentCapacityFilters.indexOf(event.target.id);
        if (existiningIndex > -1) {
            currentCapacityFilters.splice(existiningIndex, 1)
        } else {
            currentCapacityFilters.push(event.target.id);
        }
        filterCars()
    })
}) 

function filterCars(){
    let filteredCars = []

    if(currentTypeFilters.length === 0){
        filteredCars = allCars
    } else{
        currentTypeFilters.forEach(element => {
            const found = allCars.filter(f=>f.typeId === parseInt(element))
            if(found){
                filteredCars.push(...found);
            }
        })
    }
    
    let filteredCars2 = []
    if(currentCapacityFilters.length === 0){
        filteredCars2 = filteredCars
    } else{
    currentCapacityFilters.forEach(element => {
        const found = filteredCars.filter(f=>f.capacityId === parseInt(element))
            if(found){
                filteredCars2.push(...found);
            }
        })
    }

    // let ssss = [...new Set(filteredCars2)]

    initCars([...new Set(filteredCars2)])
}
