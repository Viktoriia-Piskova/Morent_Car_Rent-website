export function displayReviews(reviews, container) {
    for (let rev of reviews) {
        container.innerHTML += `
        <div class="row justify-content-between no-wrap my-5">
            <div class="col-1">
                <img src="./img/users/${rev.user.photo}" alt="userphoto" class="rounded-circle">
            </div>
            <div class="col">
                <div class="col row justify-content-between no-wrap">
                    <div class="col-sm-3 rev-name">${rev.user.name}</div>
                    <div class="col-sm-3 rev-date text-right">${rev.revDate}</div>
                </div>
                <div class="col row justify-content-between no-wrap">
                    <div class="col-sm-3 rev-job">${rev.user.job}</div>
                    <div class="col-sm-3 rev-stars text-right">* * * * ${rev.revRating}</div>
                </div>
                <div class="rev-text">
                    ${rev.revText}
                </div>
            </div>
        </div>
        `
    }
}

export const reviewsList = [               //colect here if reviews are being fetched from api according to selected car
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
},
];
