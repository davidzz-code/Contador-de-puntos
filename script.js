const pointsHome = document.querySelector('.points-home');
const pointsGuest = document.querySelector('.points-guest');
const extraFunctions = document.querySelector('.extra-functions');

const home = document.querySelector('.score-home');
const guest = document.querySelector('.score-guest');

let homeScore = 0;
let guestScore = 0;

// Añade puntos al marcador 'home'
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



// Añade puntos al marcador 'guest'
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


// Funciones extra
extraFunctions.addEventListener('click', (e) => {

    // Hace un reset de los contadores y los pone a 0
    if (e.target && e.target.classList.contains('reset')) {
        homeScore = 0;
        guestScore = 0;
    
        home.innerText = homeScore
        guest.innerText = guestScore

    // Lanza un prompt para cambiar los nombres de los jugadores
    } else if (e.target && e.target.classList.contains('change-name')) {
        const titleHome = document.querySelector('.title-home');
        const titleGuest = document.querySelector('.title-guest');

        const hostName = prompt('Write the host name: ').toUpperCase;
        const guestName = prompt('Write the guest name: ').toUpperCase;

        titleHome.innerHTML = `<h3>${hostName}</h3>`
        titleGuest.innerHTML = `<h3>${guestName}</h3>`
    }
})