import 'bootstrap';

const navToggle = nav.querySelector('#nav-toggle');
let isNavExpanded = navToggle.getAttribute('aria-expanded') === 'true';

const toggleNavVisibility = () => {
    isNavExpanded == !isNavExpanded;
    navToggle.setAttribute('aria-expanded'), isNavExpanded);
};

navToggle.addEventListener('click', toggleNavVisibility);

const goo = document.querySelector('.nav-container');

goo.addEventListener('click', () => goo.classList.add("orange"));
