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


//  Login & logout for both desktop and mobile
const desktopLogin = document.querySelector('.desktop .login');
const mobileLogin = document.querySelector('.mobileScreens .login');
const desktopRegister = document.querySelector('.desktop .register');
const mobileRegister = document.querySelector('.mobileScreens .register');

desktopLogin.addEventListener('click', () => {
    window.location.href = './html/login.html';
});
q
desktopRegister.addEventListener('click', () => {
    window.location.href = './html/register.html';
});

mobileLogin.addEventListener('click', () => {
    window.location.href = './html/login.html';
});

mobileRegister.addEventListener('click', () => {
    window.location.href = './html/register.html';
});

 function createUsernameContainer() {
    const container = document.createElement("div");
    container.id = "username-container";
    container.style.display = "none";
    container.style.color = "#21758f";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.gap = "5px";

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-user";
    icon.id = "user-icon";
    const display = document.createElement("span");
    display.id = "username-display";

    container.appendChild(icon);
    container.appendChild(display);
    return container;
}

 function createLogoutButton() {
    const button = document.createElement("button");
    button.id = "logout-btn";
    button.textContent = "Logout";
    button.style.display = "none";
    button.style.padding = "3px 20px";
    button.style.color = "#fff";
    button.style.backgroundColor = "#0d2537";
    button.style.border = "none";
    button.style.borderRadius = "10px";
    button.style.fontWeight = "bold";
    return button;
}

 const btnsContainerDesktop = document.querySelector(".desktop .btns");
const btnsContainerMobile = document.querySelector(".mobileScreens .btns");

const usernameContainerDesktop = createUsernameContainer();
const logoutBtnDesktop = createLogoutButton();

const usernameContainerMobile = createUsernameContainer();
const logoutBtnMobile = createLogoutButton();

btnsContainerDesktop.appendChild(usernameContainerDesktop);
btnsContainerDesktop.appendChild(logoutBtnDesktop);
btnsContainerMobile.appendChild(usernameContainerMobile);
btnsContainerMobile.appendChild(logoutBtnMobile);

 const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
    usernameContainerDesktop.querySelector("#username-display").textContent = ` ${currentUser.firstName}`;
    usernameContainerDesktop.style.display = "flex";
    logoutBtnDesktop.style.display = "inline";
    desktopLogin.style.display = "none";
    desktopRegister.style.display = "none";

    usernameContainerMobile.querySelector("#username-display").textContent = ` ${currentUser.firstName}`;
    usernameContainerMobile.style.display = "flex";
    logoutBtnMobile.style.display = "inline";
    mobileLogin.style.display = "none";
    mobileRegister.style.display = "none";
}


logoutBtnDesktop.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = './html/login.html';
});

logoutBtnMobile.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = './html/login.html';
});