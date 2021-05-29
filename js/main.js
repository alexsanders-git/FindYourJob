const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeMenuButton = document.querySelector('.close');

menuButton.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.add('is-open');
});

closeMenuButton.addEventListener('click', (event) => {
    event.preventDefault();
    menu.classList.remove('is-open');
});