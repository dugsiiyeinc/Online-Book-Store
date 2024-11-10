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

 const btnsContainer = document.querySelector(".btns");

 const usernameContainer = document.createElement("div");
usernameContainer.id = "username-container";
usernameContainer.style.display = "none";
usernameContainer.style.color = "#21758f";
usernameContainer.style.flexDirection = "column";
usernameContainer.style.alignItems = "center";
usernameContainer.style.gap = "5px";

 const userIcon = document.createElement("i");
userIcon.className = "fa-solid fa-user";
userIcon.id = "user-icon";
 const usernameDisplay = document.createElement("span");
usernameDisplay.id = "username-display";

 usernameContainer.appendChild(userIcon);
usernameContainer.appendChild(usernameDisplay);
// logout
const logoutBtn = document.createElement("button");
logoutBtn.id = "logout-btn";
logoutBtn.textContent = "Logout";
logoutBtn.style.display = "none";
logoutBtn.style.padding = "3px 20px";
logoutBtn.style.color = "#fff";
logoutBtn.style.backgroundColor = "#0d2537";
logoutBtn.style.border = "none";
logoutBtn.style.borderRadius = "10px";
logoutBtn.style.fontWeight = "bold";

 btnsContainer.appendChild(usernameContainer);
btnsContainer.appendChild(logoutBtn);

const loginBtn = document.querySelector(".login");
const registerBtn = document.querySelector(".register");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        usernameDisplay.textContent = ` ${currentUser.firstName}`;
         usernameContainer.style.display = "flex"
        logoutBtn.style.display = "inline";
         loginBtn.style.display = "none";
        registerBtn.style.display = "none";
    }

    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = './html/login.html';
    });


