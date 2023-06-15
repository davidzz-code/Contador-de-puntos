const home = document.querySelector(".points-home");
const guest = document.querySelector(".points-guest");


const divHome1 = document.querySelector(".plus-one-home");
const divGuest1 = document.querySelector(".plus-one-guest");

const divHome2 = document.querySelector(".plus-two-home");
const divGuest2 = document.querySelector(".plus-two-guest");

const divHome3 = document.querySelector(".plus-three-home");
const divGuest3 = document.querySelector(".plus-three-guest");


let pointsHome = document.querySelector(".score-home");
let pointsGuest = document.querySelector(".score-guest");

let homeScore = 0;
let guestScore = 0;


const addOne = (teamScore) => {
    return teamScore += 1;
}

const addTwo = (teamScore) => {
    return teamScore += 2;
}

const addThree = (teamScore) => {
    return teamScore += 3;
}


divHome1.addEventListener('click', function () {
    if (this.parentNode === home) {
        homeScore = addOne(homeScore);
        pointsHome.textContent = homeScore;
    }
});

divGuest1.addEventListener('click', function () {
    guestScore = addOne(guestScore);
    console.log(guestScore);
    pointsGuest.textContent = guestScore;
});


divHome2.addEventListener('click', function () {
    if (this.parentNode === home) {
        homeScore = addTwo(homeScore);
        pointsHome.textContent = homeScore;
    }
});

divGuest2.addEventListener('click', function () {
    guestScore = addTwo(guestScore);
    console.log(guestScore);
    pointsGuest.textContent = guestScore;
});



divHome3.addEventListener('click', function () {
    if (this.parentNode === home) {
        homeScore = addThree(homeScore);
        pointsHome.textContent = homeScore;
    }
});

divGuest3.addEventListener('click', function () {
    guestScore = addThree(guestScore);
    console.log(guestScore);
    pointsGuest.textContent = guestScore;
});






