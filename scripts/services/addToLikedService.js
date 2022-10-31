const likedCars = []; 

export function addToLikedCars(allCars, carId) {
   const likedCar = allCars.find(element => element.id === carId);
   const isLiked = likedCars.indexOf(likedCar);

   if (isLiked > -1) {
      likedCars.splice(isLiked, 1)
   } else {
      likedCars.push(likedCar);
   }

   document.getElementById('liked-count').innerHTML = likedCars.length
}
