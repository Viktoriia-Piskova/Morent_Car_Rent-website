import { carsData } from "./carsData.js";
import {likedCars} from "./main.js";

export function addToLikedCars(carId){
   const likedCar = carsData.find(element => element.id === carId);
   const isLiked = likedCars.indexOf(likedCar);
   if (isLiked > -1) {
    likedCars.splice(isLiked, 1)
   } else {
    likedCars.push(likedCar);
   }
   document.getElementById('liked-count').innerHTML = likedCars.length
}

