//? Mobile menu
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const mobileNav = document.querySelector('.mobileScreens');
const heroSection = document.querySelector('#hero');

openMenu.addEventListener('click', () => {
    mobileNav.classList.add('active');
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
});


openMenu.addEventListener('click', () => {
    heroSection.classList.add("blur");
    console.log("cool")
});
closeMenu.addEventListener('click', () => {
    heroSection.classList.remove("blur");
    console.log("cool")
});


