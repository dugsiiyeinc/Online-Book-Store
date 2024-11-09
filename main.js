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
//  Newsletter

const newsletter = document.querySelector("#news-letter");

newsletter.addEventListener('submit',(event)=>{
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert("Thanks for your subscribing");
})

const login = document.querySelector('.login');
const register = document.querySelector('.register');
login.addEventListener('click', ()=>{
    window.location.href = './html/login.html'
});

register.addEventListener('click', ()=>{
    console.log("clicked");
    window.location.href = './html/register.html'

});

const usernameDisplay = document.getElementById("username-display");
const logoutBtn = document.getElementById("logout-btn");
const loginBtn = document.querySelector(".login");
const registerBtn = document.querySelector(".register");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        usernameDisplay.innerHTML = `<i class="fa-solid fa-user"></i> Welcome, ${currentUser.firstName}`;
        usernameDisplay.style.display = "inline";
        logoutBtn.style.display = "inline";

         loginBtn.style.display = "none";
        registerBtn.style.display = "none";
    }

