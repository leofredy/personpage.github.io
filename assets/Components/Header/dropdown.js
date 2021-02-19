const btnMenu = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
}, false);