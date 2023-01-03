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

//========== education hiding button ==========//

let educationShow = document.getElementById('education-show');
let educationHide = document.getElementById('education-hide');
let educationContent = document.getElementById('education-content');

educationHide.style.display = 'none';
educationContent.style.display = 'none';

const hideEducationContent = () => {
    educationContent.style.display ='none';
    educationHide.style.display = 'none';
    educationShow.style.display = '';
};

educationHide.onclick = hideEducationContent;

const showEducationContent = () => {
    educationContent.style.display = '';
    educationHide.style.display = '';
    educationShow.style.display = 'none';
};

educationShow.onclick = showEducationContent;


//========== skills hiding button ==========//

let skillShow = document.getElementById('software-skill-show');
let skillHide = document.getElementById('software-skill-hide');
let skillContent = document.getElementById('skills-grid-container');

skillHide.style.display = 'none';
skillContent.style.display = 'none';

const hideSkillContent = () => {
    skillContent.style.display ='none';
    skillHide.style.display = 'none';
    skillShow.style.display = '';
};

skillHide.onclick = hideSkillContent;

const showSkillContent = () => {
    skillContent.style.display = '';
    skillHide.style.display = '';
    skillShow.style.display = 'none';
};

skillShow.onclick = showSkillContent;

//========== projects hiding button ==========//

let show = document.getElementById('show-button');
let hide = document.getElementById('hide-button');
let projectsContent = document.getElementById('projects-content');

hide.style.display = 'none';
projectsContent.style.display = 'none';

const hideButtonFire = () => {
    hide.style.display = 'none';
    show.style.display = '';
}

const hideProjectsContent = () => {
    projectsContent.style.display = 'none';
}

hide.addEventListener('click', () => {hideProjectsContent(); hideButtonFire()});

const showButtonFire = () => {
    show.style.display = 'none';
    hide.style.display = '';
}

const showProjectsContent = () => {
    projectsContent.style.display = '';
}

show.addEventListener('click', () => {showProjectsContent(); showButtonFire()});

//========== employment hiding button ==========//

let employmentShow = document.getElementById('employment-show');
let employmentHide = document.getElementById('employment-hide');
let employmentContent = document.getElementById('employment-content');

employmentHide.style.display = 'none';
employmentContent.style.display = 'none';

const hideEmploymentContent = () => {
    employmentContent.style.display ='none';
    employmentHide.style.display = 'none';
    employmentShow.style.display = '';
};

employmentHide.onclick = hideEmploymentContent;

const showEmploymentContent = () => {
    employmentContent.style.display = '';
    employmentHide.style.display = '';
    employmentShow.style.display = 'none';
};

employmentShow.onclick = showEmploymentContent;

//========== interest hiding button ==========//

let interestShow = document.getElementById('interest-show');
let interestHide = document.getElementById('interest-hide');
let interestContent = document.getElementById('interest-content');

interestHide.style.display = 'none';
interestContent.style.display = 'none';

function hideInterestContent() {
    interestContent.style.display = 'none';
    interestHide.style.display = 'none';
    interestShow.style.display = '';
}

interestHide.onclick = hideInterestContent;

const showInterestContent = () => {
    interestContent.style.display = '';
    interestHide.style.display = '';
    interestShow.style.display = 'none';
};

interestShow.onclick = showInterestContent;

//========== footer current year ==========//

let currentYear = document.getElementById('current-year');

currentYear.innerHTML = new Date().getFullYear();
