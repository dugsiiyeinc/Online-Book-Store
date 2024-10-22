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

let index = 0;
const imgContentHero = document.querySelector("#contentHero-img");

function addContentHeroImg() {

    imgContentHero.innerHTML = "";

    const img = document.createElement("img");
    img.src = contentHeroImg[index];
    img.style.width = "100%";
    img.style.height = "500px";
    img.style.objectFit = "cover";

    imgContentHero.appendChild(img);

    index = (index + 1) % contentHeroImg.length;
}

setInterval(addContentHeroImg, 2000);
addContentHeroImg(); 
