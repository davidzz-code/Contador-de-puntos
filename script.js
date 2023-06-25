const pointsHome = document.querySelector('.points-home');
const pointsGuest = document.querySelector('.points-guest');
const reset = document.querySelector('.reset');

const home = document.querySelector('.score-home');
const guest = document.querySelector('.score-guest');

let homeScore = 0;
let guestScore = 0;

pointsHome.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('plus-one')) {
        homeScore += 1;
        
    } else if (e.target && e.target.classList.contains('plus-two')) {
        homeScore += 2;
        
    } else if (e.target && e.target.classList.contains('plus-three')) {
        homeScore += 3;
    };

    home.innerText = homeScore;
});

pointsGuest.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('plus-one')) {
        guestScore += 1;
        
    } else if (e.target && e.target.classList.contains('plus-two')) {
        guestScore += 2;
        
    } else if (e.target && e.target.classList.contains('plus-three')) {
        guestScore += 3;
    };

    guest.innerText = guestScore;
});

reset.addEventListener('click', () => {
    homeScore = 0;
    guestScore = 0;

    home.innerText = homeScore
    guest.innerText = guestScore
});