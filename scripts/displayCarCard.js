export function displayCarCard (carsList, container) {
   container.innerHTML = '';
    for (let car of carsList) {
        container.innerHTML += `
        <div id="${car.id}" class="card col-md-3 p-4 m-3" style="width:278px">
            <div class="row justify-content-between">
                <h4 class="card-title col">${car.name}</h4>
                <button class="like-btn col-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
                <div class="rent-info row justify-content-between">
                    <div class="price-display col row column align-content-center">
                        <p class="price col"><span class="current-price">$${car.currentPrice}.00/</span>day</p>
                        <p class="price full-price col">$${car.fullPrice}.00</p>
                    </div>
                    <a href="#" class="btn btn-primary col-5 rent-now-btn">Rent now</a>
                </div>
            </div>
         </div>`;
    }
}