/* === Mobile menu === */
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

/* === blur background === */

openMenu.addEventListener('click', () => {
    heroSection.classList.add("blur");
    console.log("cool")
});
closeMenu.addEventListener('click', () => {
    heroSection.classList.remove("blur");
    console.log("cool")
});


/* === content hero image === */

const contentHeroImg = [
    "/images/image-01.png",
    "/images/image-02.png",
    "/images/image-003.png",
    "/images/image-04.png",

];
//  Newsletter

const newsletter = document.querySelector("#news-letter");

newsletter.addEventListener('submit',(event)=>{
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert("Thanks for your subscribing");
})