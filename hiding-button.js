//========== variables ========== //

//----- education -----//

let educationShow = document.getElementById('education-show');
let educationHide = document.getElementById('education-hide');
let educationContent = document.getElementById('education-content');
let educationNavLink = document.getElementById('education-nav-link');

//----- skills -----//

let skillShow = document.getElementById('software-skill-show');
let skillHide = document.getElementById('software-skill-hide');
let skillContent = document.getElementById('skills-grid-container');
let skillsNavLink = document.getElementById('skills-nav-link');

//----- projects -----//

let projectsShow = document.getElementById('show-button');
let projectsHide = document.getElementById('hide-button');
let projectsContent = document.getElementById('projects-content');
let projectsNavLink = document.getElementById('projects-nav-link');

//----- employment -----//

let employmentShow = document.getElementById('employment-show');
let employmentHide = document.getElementById('employment-hide');
let employmentContent = document.getElementById('employment-content');
let employmentNavLink = document.getElementById('employment-nav-link');

//----- interests -----//

let interestShow = document.getElementById('interest-show');
let interestHide = document.getElementById('interest-hide');
let interestContent = document.getElementById('interest-content');
let interestsNavLink = document.getElementById('interests-nav-link');


//========== style ========== //

//----- education -----//
educationHide.style.display = 'none';
educationContent.style.display = 'none';
//----- skills -----//
skillHide.style.display = 'none';
skillContent.style.display = 'none';
//----- projects -----//
projectsHide.style.display = 'none';
projectsContent.style.display = 'none';
//----- employment -----//
employmentHide.style.display = 'none';
employmentContent.style.display = 'none';
//----- interests -----//
interestHide.style.display = 'none';
interestContent.style.display = 'none';



//========== hiding button functions ========== //

const hideContent = (content, hide, show) => {
    content.style.display ='none';
    hide.style.display = 'none';
    show.style.display = '';
};

const showContent = (content, hide, show) => {
    content.style.display = '';
    hide.style.display = '';
    show.style.display = 'none';
};



//========== events ========== //

//----- education -----//

educationHide.addEventListener('click', () => {hideContent(educationContent, educationHide, educationShow)});
educationShow.addEventListener('click', () => {showContent(educationContent, educationHide, educationShow)});
educationNavLink.addEventListener('click', () => {showContent(educationContent, educationHide, educationShow)});

//----- skills -----//

skillHide.addEventListener('click', () => {hideContent(skillContent, skillHide, skillShow)});
skillShow.addEventListener('click', () => {showContent(skillContent, skillHide, skillShow)});
skillsNavLink.addEventListener('click', () => {showContent(skillContent, skillHide, skillShow)});

//----- projects -----//

projectsHide.addEventListener('click', () => {hideContent(projectsContent, projectsHide, projectsShow)});
projectsShow.addEventListener('click', () => {showContent(projectsContent, projectsHide, projectsShow)});
projectsNavLink.addEventListener('click', () => {showContent(projectsContent, projectsHide, projectsShow)});

//----- employment -----//

employmentHide.addEventListener('click', () => {hideContent(employmentContent, employmentHide, employmentShow)});
employmentShow.addEventListener('click', () => {showContent(employmentContent, employmentHide, employmentShow)});
employmentNavLink.addEventListener('click', () => {showContent(employmentContent, employmentHide, employmentShow)});


//----- interests -----//

interestHide.addEventListener('click', () => {hideContent(interestContent, interestHide, interestShow)});
interestShow.addEventListener('click', () => {showContent(interestContent, interestHide, interestShow)});
interestsNavLink.addEventListener('click', () => {showContent(interestContent, interestHide, interestShow)});

//----- home button -----//

homeButton.addEventListener('click', () => {
    hideContent(educationContent, educationHide, educationShow);
    hideContent(skillContent, skillHide, skillShow);
    hideContent(projectsContent, projectsHide, projectsShow);
    hideContent(employmentContent, employmentHide, employmentShow);
    hideContent(interestContent, interestHide, interestShow);
}
)