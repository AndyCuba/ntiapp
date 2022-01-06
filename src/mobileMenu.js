const menuButton = document.getElementById('menu');
const closeMenuButton = document.getElementById('close-mobile-menu');
const menuContent = document.getElementsByClassName('home__mobile-menu')[0];

function openMenu() {
    menuContent.classList.add('open__mobile-menu');
};

function closeMenu() {
    menuContent.classList.remove('open__mobile-menu');
};

menuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);