//? Mobile menu
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const mobileNav = document.querySelector('.mobileScreens');


openMenu.addEventListener('click', () => {
    mobileNav.classList.add('active'); //? Show the mobile menu
    openMenu.style.display = 'none'; //? Hide the menu icon
    closeMenu.style.display = 'block'; //? Show the close icon
});

closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('active'); //? Hide the mobile menu
    closeMenu.style.display = 'none'; //? Hide the close icon
    openMenu.style.display = 'block'; //? Show the menu icon
});

//? hero section , background images adding as dynamic .
const heroBg = [
    'url("/images/bgHero-3.png")',
    'url("/images/bgHero-1.png")',
    'url("/images/bgHero-3.png")',
    'url("/images/bgHero-2.png")',
    'url("/images/bgHero-3.png")',
]
//* test
// console.log(heroBg)

heroBg.forEach((image) => {
    //* test
    // console.log("img one: ", img)
    const img = new Image()
    img.src = image
})

let indexId = 0 ;

function ChangeHeroBg () {
    setTimeout(() => {
        document.querySelector("#hero").style.background = heroBg[indexId]
    }, 1000 * 5);
    indexId = (indexId + 1) % heroBg.length
    console.log(heroBg[indexId])
}
setInterval(ChangeHeroBg, 4000);

ChangeHeroBg()