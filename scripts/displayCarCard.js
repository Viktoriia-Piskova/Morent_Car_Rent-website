//import {carsData} from './carsData.js';

export function displayCarCard (carsData) {
    for (let car of carsData) {
        const recentCarContainer = document.getElementById('recent-car-container');
        recentCarContainer.innerHTML += `
        <div id="${car.id}" class="card" style="width:317px">
        <div class="row justify-content-between">
            <h4 class="card-title col">${car.name}</h4>
            <button class="like-btn col">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="red"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.44 3.09961C14.63 3.09961 13.01 3.97961 12 5.32961C10.99 3.97961 9.37 3.09961 7.56 3.09961C4.49 3.09961 2 5.59961 2 8.68961C2 9.87961 2.19 10.9796 2.52 11.9996C4.1 16.9996 8.97 19.9896 11.38 20.8096C11.72 20.9296 12.28 20.9296 12.62 20.8096C15.03 19.9896 19.9 16.9996 21.48 11.9996C21.81 10.9796 22 9.87961 22 8.68961C22 5.59961 19.51 3.09961 16.44 3.09961Z"
                        fill="#3D5278" />
                </svg>
            </button>
        </div>
        <p class="type-car">${car.type}</p>
        <img class="card-img-top" src="./img/cars/${car.images[0]}" alt="Card image">
        <div class="card-body">

            <div class="tech-section row">
                <div class="tech-info col no-wrap">
                    <div class="tech-icon"><img src="./img/gas-station.svg" alt="gas"></div>
                    <span class="tech-desription">${car.gasoline}L</span>
                </div>
                <div class="tech-info col no-wrap">
                    <div class="tech-icon"><img src="./img/manual.svg" alt="steering"></div>
                    <span class="tech-desription">${car.steering}</span>
                </div>
                <div class="tech-info col no-wrap">
                    <div class="tech-icon"><img src="./img/capacity-people.svg" alt="capacity-people"></div>
                    <span class="tech-desription">${car.capacity} people</span>
                </div>
            </div>

            <div class="rent-info row">
                <div class="price-display col row column align-content-center">
                    <p class="price col"><span class="current-price">$${car.currentPrice}.00/</span>day</p>
                    <p class="price full-price col">$${car.fullPrice}.00</p>
                </div>
                <a href="#" class="btn btn-primary col rent-now-btn">Rent now</a>
            </div>
        </div>
    </div>`;
    }
}