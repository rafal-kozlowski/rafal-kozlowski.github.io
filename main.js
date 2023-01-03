// //========== home button ==========//
let homeButton = document.getElementById('home-button');

function showHomeButton() {
    let y = window.scrollY;
    let mainNameHeight = document.getElementById('main-name').offsetHeight;
    if (y > mainNameHeight) {
        homeButton.className = "scroll-button show";
    } else {
        homeButton.className = "scroll-button hide";
    }
}

window.addEventListener('scroll', showHomeButton);



//========== footer current year ==========//

let currentYear = document.getElementById('current-year');

currentYear.innerHTML = new Date().getFullYear();

