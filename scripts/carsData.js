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
                images,
                isOpened = false,
                isRecent = false) {
        this.id = id,
        this.name = carName,
        this.type = typeCar,
        this.capacity = capacity,
        this.steering = steering,
        this.gasoline = gasoline,
        this.currentPrice = currentPrice,
        this.fullPrice = fullPrice,
        this.description = description,
        this.images = images,
        this.isOpened = isOpened,
        this.isRecent = isRecent
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
["mc01.png", "addphoto_a1c01.png", "addphoto_a2c01.png"],
true));

carsData.push(new Car('c02', 
'Koenigsegg',
'Sport', 
2, 
'Manual', 
90, 
99, 
99,
"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
["mc02.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]));

carsData.push(new Car('c03', 
'Rolls-Royce',
'Sport', 
4, 
'Manual', 
70, 
96, 
96,
"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
["mc03.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]));

carsData.push(new Car('c04', 
'All New Rush',
'SUV', 
6, 
'Manual', 
70, 
72, 
80,
"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
["mc04.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]));

carsData.push(new Car('c05', 
'CR  - V',
'SUV', 
6, 
'Manual', 
80, 
80, 
80,
"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
["mc05.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]));

carsData.push(new Car('c06', 
'All New Terios',
'SUV', 
6, 
'Manual', 
90, 
74, 
74,
"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
["mc05.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]));


