import {Car} from './car.js'

export const allCapacities = [
    { id: 1, name: '2 Person'},
    { id: 2, name: '4 Person'},
     { id: 3, name: '6 Person'},
     { id: 4, name: '8 or more'}
    ];

     
export const allTypes = [
    { id: 1, name: 'Sport'},
    { id: 2, name: 'SUV'},
    { id: 3, name: 'MVP'},
    { id: 4, name: 'Coupe'},
    { id: 5, name: 'Hatchback'}
    ];

export const reviewsList = [
    {
        user: {
            name: 'Alex Stanton',
            job: 'CEO at Bukalapak',
            photo: 'user01.png'
        },
        revDate: '21 July 2022',
        revRating: 4,
        revText: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.'
    },
    {
        user: {
            name: 'Skylar Dias',
            job: 'CEO at Amazon',
            photo: 'user02.png'
        },
        revDate: '20 July 2022',
        revRating: 4,
        revText: 'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.'
    }];


    export const allCars = [
        new Car('c01', 
            'Nissan GT-R',
            1, 
            1, 
            'Manual', 
            70, 
            80, 
            100,
            "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
            ["mc01.png", "addphoto_a1c01.png", "addphoto_a2c01.png"],
            true),
        new Car('c02', 
            'Koenigsegg',
            1, 
            2, 
            'Manual', 
            90, 
            99, 
            99,
            "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
            ["mc02.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]),
        new Car('c03', 
            'Rolls-Royce',
            1, 
            2, 
            'Manual', 
            70, 
            96, 
            96,
            "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
            ["mc03.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]),
        new Car('c04', 
            'All New Rush',
            2, 
            3, 
            'Manual', 
            70, 
            72, 
            80,
            "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
            ["mc04.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]),
        new Car('c05', 
            'CR  - V',
            2, 
            3, 
            'Manual', 
            80, 
            80, 
            80,
            "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
            ["mc05.png", "addphoto_a1c01.png", "addphoto_a2c01.png"]),
    
        new Car('c06', 
            'All New Terios',
            2, 
            3, 
            'Manual', 
            90, 
            74, 
            74,
            "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track..",
            ["mc05.png", "addphoto_a1c01.png", "addphoto_a2c01.png"])
        ];
    