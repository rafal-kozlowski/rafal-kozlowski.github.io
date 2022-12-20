//========== contact hiding button ==========//
let contactShow = document.getElementById('contact-show');
let contactHide = document.getElementById('contact-hide');
let contactContent = document.getElementById('contact-content');

contactShow.style.display = 'none'; 

function hideContactContent() {
    contactContent.style.display = 'none';
    contactShow.style.display = ''; 
    contactHide.style.display = 'none'; 
}

contactHide.addEventListener('click', hideContactContent);

const showContactContent = () => {
    contactContent.style.display = '';
    contactShow.style.display = 'none'; 
    contactHide.style.display = ''; 
};
contactShow.onclick = showContactContent;

//========== software&languages hiding button ==========//

let softwareSkillShow = document.getElementById('software-skill-show');
let softwareSkillHide = document.getElementById('software-skill-hide');
let softwareSkillContent = document.getElementById('software-skill-content');

softwareSkillShow.style.display = 'none';

const hideSoftwareSkillContent = () => {
    softwareSkillContent.style.display ='none';
    softwareSkillHide.style.display = 'none';
    softwareSkillShow.style.display = '';
};

softwareSkillHide.onclick = hideSoftwareSkillContent;

const showSoftwareSkillContent = () => {
    softwareSkillContent.style.display = '';
    softwareSkillHide.style.display = '';
    softwareSkillShow.style.display = 'none';
};

softwareSkillShow.onclick = showSoftwareSkillContent;

//========== soft skill hiding button ==========//

let softSkillShow = document.getElementById('soft-skill-show');
let softSkillHide = document.getElementById('soft-skill-hide');
let softSkillContent = document.getElementById('soft-skill-content');

softSkillShow.style.display = 'none';

const hideSoftSkillContent = () => {
    softSkillContent.style.display ='none';
    softSkillHide.style.display = 'none';
    softSkillShow.style.display = '';
};

softSkillHide.onclick = hideSoftSkillContent;

const showSoftSkillContent = () => {
    softSkillContent.style.display = '';
    softSkillHide.style.display = '';
    softSkillShow.style.display = 'none';
};

softSkillShow.onclick = showSoftSkillContent;

//========== additional activities hiding button ==========//

let activitiesShow = document.getElementById('activities-show');
let activitiesHide = document.getElementById('activities-hide');
let activitiesContent = document.getElementById('activities-content');

activitiesShow.style.display = 'none';

const hideActivitiesContent = () => {
    activitiesContent.style.display ='none';
    activitiesHide.style.display = 'none';
    activitiesShow.style.display = '';
};

activitiesHide.onclick = hideActivitiesContent;

const showActivitiesContent = () => {
    activitiesContent.style.display = '';
    activitiesHide.style.display = '';
    activitiesShow.style.display = 'none';
};

activitiesShow.onclick = showActivitiesContent;

//========== interest hiding button ==========//

let interestShow = document.getElementById('interest-show');
let interestHide = document.getElementById('interest-hide');
let interestContent = document.getElementById('interest-content');

interestShow.style.display = 'none';

const hideInterestContent = () => {
    interestContent.style.display ='none';
    interestHide.style.display = 'none';
    interestShow.style.display = '';
};

interestHide.onclick = hideInterestContent;

const showInterestContent = () => {
    interestContent.style.display = '';
    interestHide.style.display = '';
    interestShow.style.display = 'none';
};

interestShow.onclick = showInterestContent;

//========== education hiding button ==========//

let educationShow = document.getElementById('education-show');
let educationHide = document.getElementById('education-hide');
let educationContent = document.getElementById('education-content');

educationShow.style.display = 'none';

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

//========== emplyment hiding button ==========//

let employmentShow = document.getElementById('employment-show');
let employmentHide = document.getElementById('employment-hide');
let employmentContent = document.getElementById('employment-content');

employmentShow.style.display = 'none';

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