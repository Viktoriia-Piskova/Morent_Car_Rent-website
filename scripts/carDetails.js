export function displayDetails(car) {
    let detailsTemplate = '';
    return detailsTemplate = `

    <section id="car-details">
    <div id="car-info" class="row">
        <div id="car-photos" class="col-lg-6">
            <div class="details-main-photo p-4">
                <h1 class="main-header col">Sports car with the best design and acceleration</h1>
                <p class="main-description col">Safety and comfort while driving a 
                    futuristic and elegant sports car</p>
                <div class="col"><img src="./img/cars/${car.images[0]}" alt=""></div>
            </div>
            <div class="row extra-photos">
                <div class="col-4 details-extra-photo"><img src="./img/cars/${car.images[0]}" class="img-thumbnail" alt=""></div>
                <div class="col-4 details-extra-photo"><img src="./img/cars/addphoto_a1c01.png" class="img-thumbnail" alt=""></div>
                <div class="col-4 details-extra-photo"><img src="./img/cars/addphoto_a2c01.png" class="img-thumbnail" alt=""></div>
            </div>
        </div>
        <div id="car-description" class="col-lg-6">
            <div class="row justify-content-between">
                <div class="col-5">
                    <h3>${car.name}</h3>
                </div>
                <button class="like-btn col-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
                            stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <div class="car-rating">{car.rating} <span>440+ Reviewer</span></div>
            <article class="car-description">
                ${car.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                excepturi accusamus dignissimos odio quam nobis unde, distinctio repellendus nulla at natus
                libero quo necessitatibus iste fugit illo eveniet consectetur! Debitis!
            </article>
           <div class="row justify-content-between">
                <div class="tech-info col no-wrap row justify-content-between">
                    <div class="tech-text col">Type Car</div>
                    <span class="tech-desription col text-right">${car.type}L</span>
                </div>
                <div class="tech-info col no-wrap row justify-content-between">
                    <div class="tech-text col">Steering</div>
                    <span class="tech-desription col text-right">${car.steering}</span>
                </div>
           </div>

           <div class="row justify-content-between">
                <div class="tech-info col no-wrap row justify-content-between">
                    <div class="tech-text col">Capacity</div>
                    <span class="tech-desription col text-right">${car.capacity}</span>
                </div>
                <div class="tech-info col no-wrap row justify-content-between">
                    <div class="tech-text col">Gasoline</div>
                    <span class="tech-desription col text-right">${car.gasoline} people</span>
                </div>
                <div class="rent-info row justify-content-between">
                    <div class="price-display col row column align-content-center">
                        <p class="price col"><span class="current-price">$${car.currentPrice}.00/</span>day</p>
                        <p class="price full-price col text-right">$${car.fullPrice}.00</p>
                    </div>
                    <a href="#" class="btn btn-primary col-5 rent-now-btn">Rent now</a>
                </div>
           </div>
        </div>
        
    </div>
</section>

    `
}