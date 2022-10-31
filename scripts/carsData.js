'use strict'

import { allTypes, allCapacities } from './data.js';

export default class Car {
    constructor(id,
                name,
                typeId,
                capacityId,
                steering, 
                gasoline, 
                currentPrice, 
                fullPrice, 
                description, 
                images,
                isOpened = false,
                isRecent = false) {
        this.id = id,
        this.name = name,

        this.typeId = typeId,
        this.typeName= allTypes.find(element => element.id === typeId).name,

        this.capacityId = capacityId,
        this.capacityName = allCapacities.find(element => element.id === capacityId).name,

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

export const allCars = [];
    allCars.push(new Car('c01', 
    'Nissan GT-R',
    1, 
    1, 
    'Manual', 
    70, 
    80, 
    100,
    "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
    ["mc01.png", "addphoto_a1c01.png", "addphoto_a2c01.png"],
    true));

allCars.push(new Car('c02', 
'Koenigsegg',
1, 
2, 
'Manual', 
90, 
99, 
99,
"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
["mc02.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]));

allCars.push(new Car('c03', 
'Rolls-Royce',
1, 
2, 
'Manual', 
70, 
96, 
96,
"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
["mc03.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]));

allCars.push(new Car('c04', 
'All New Rush',
2, 
3, 
'Manual', 
70, 
72, 
80,
"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
["mc04.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]));

allCars.push(new Car('c05', 
'CR  - V',
2, 
3, 
'Manual', 
80, 
80, 
80,
"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
["mc05.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]));

allCars.push(new Car('c06', 
'All New Terios',
2, 
3, 
'Manual', 
90, 
74, 
74,
"NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
["mc05.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]));



