'use strict'
import {carsData} from './carsData.js';
import {displayCarCard} from './displayCarCard.js';
import {displayFilters} from './carsFilter.js';
import {displayReviews} from './reviews.js';
import {reviewsList} from './reviews.js';


const typesList = ['Sport', 'SUV', 'MVP', 'Sedan', 'Coupe', 'Hatchback'];  // initialised explicitly in case available filters are fetched from API
const typesContainer = document.getElementById('typeFilter');
const capacitiesList = ['2 Person', '4 Person', '6 Person', '8 or more'];
const capacityContainer = document.getElementById('capacity-container');
const reviewsContainer = document.getElementById('reviews-container')
const recentCarContainer = document.getElementById('recent-car-container');

displayFilters(typesList, typesContainer);
displayFilters(capacitiesList, capacityContainer);
displayReviews(reviewsList, reviewsContainer);
displayCarCard(carsData, recentCarContainer);
