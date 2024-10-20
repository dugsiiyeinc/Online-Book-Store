//? Select the elements for menu open and close actions
const openMenu = document.querySelector('#open-menu'); //? Menu icon
const closeMenu = document.querySelector('#close-menu'); //? Close icon
const mobileNav = document.querySelector('.mobileScreens'); //? Mobile navigation

//? Function to open the menu
openMenu.addEventListener('click', () => {
    mobileNav.classList.add('active'); //? Show the mobile menu
    openMenu.style.display = 'none'; //? Hide the menu icon
    closeMenu.style.display = 'block'; //? Show the close icon
});

// Function to close the menu
closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('active'); //? Hide the mobile menu
    closeMenu.style.display = 'none'; //? Hide the close icon
    openMenu.style.display = 'block'; //? Show the menu icon
});
