'use strict'
export default class Car {
    constructor(id,
                carName,
                typeCar,
                capacity,
                steering, 
                gasoline, 
                currentPrice, 
                fullPrice, 
                description, 
                images) {
        this.id = id,
        this.carName = carName,
        this.typeCar = typeCar,
        this.capacity = capacity,
        this.steering = steering,
        this.gasoline = gasoline,
        this.currentPrice = currentPrice,
        this.fullPrice = fullPrice,
        this.description = description,
        this.images = images
    }
}



export const carsData = [];
carsData.push(new Car('c01', 
'Nassan GT-R',
'Sport', 
2, 
'Manual', 
70, 
80, 
100,
"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
["./img/mc02.png", "./img/mc02.png"]));

carsData.push(new Car('c02', 
'Koenigsegg',
'Sport', 
2, 
'Manual', 
90, 
99, 
99,
"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
["./img/mc01.png", "./img/mc01.png"]));

carsData.push(new Car('c03', 
'Rolls-Royce',
'Sport', 
4, 
'Manual', 
70, 
96, 
96,
"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
["./img/mc03.png", "./img/mc01.png"]));


// [
//     ['Nissan GT-R', 'sport', 2, 'Manual', 70, 80, 100,
//     "NISMO has become ....INSERT ... the race track.",
//     "./img/mc01.png", ["./img/mc01.png", "./img/mc01.png"]],

//      []


// ]
//.map(([carName, typeCar, capacity, steering, gasoline, currentPrice, fullPrice, description, mainImage, additionalPhotos]) => ({carName, typeCar, capacity, steering, gasoline, currentPrice, fullPrice, description, mainImage, additionalPhotos}))

// console.log(carsRawData)
