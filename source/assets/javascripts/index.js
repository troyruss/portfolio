import 'bootstrap';

// nav toggle
const navToggle = nav.querySelector('#nav-toggle');
let isNavExpanded = navToggle.getAttribute('aria-expanded') === 'true';

const toggleNavVisibility = () => {
  isNavExpanded = !isNavExpanded;
  navToggle.setAttribute('aria-expanded', isNavExpanded);
};

navToggle.addEventListener('click', toggleNavVisibility);

// const goo = document.querySelector('.nav-container');

// goo.addEventListener('click', () => goo.classList.add("orange"));

const navMenu = document.querySelector('#nav-menu');
const navLinksContainer = navMenu.querySelector('.nav-links');

navLinksContainer.addEventListener('click', (e) => e.stopPropagation());
navMenu.addEventListener('click', toggleNavVisibility);

// dark mode toggle need to update
// const details = document.getElementById('details');
// const basics = document.getElementById('basics');
// const basicInfo = document.querySelector('.basic-info-group');
// const detailedInfo = document.querySelector('.detailed-info-group');
// const backingCard = document.querySelector('.backing-card');

// if (details) {
//     details.addEventListener('click', () => {
//     console.log("details!");
//     // basicInfo.classList.add('basics-hidden');
//     // detailedInfo.classList.remove('details-hidden');
//     // detailedInfo.classList.add('backing-card-details');
//     // backingCard.classList.add('backing-card-details');
//     });
// }

// if (basics) {
//     basics.addEventListener('click', () => {
//     console.log("basics!");
//     // detailedInfo.classList.add('details-hidden');
//     // basicInfo.classList.remove('basics-hidden');
//     // backingCard.classList.remove('backing-card-details');
//     });
// }
  
//     // basicInfo.addEventListener('click', () => {
//     //   console.log("info!");
//     // });

// NEW DARK MODE
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.getElementById('dark-mode-toggle');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
    enableDarkMode();
    document.getElementById('dark-mode-toggle').checked = true;
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log("enabledarkmode?");
    } else {
        disableDarkMode();
        console.log("disabledarkmode?");
    }
});
