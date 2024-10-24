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

/* === best sellers === */

let books = [];
let booksPerPage =  window.innerWidth <= 992 ? 1 :3; 
const totalBooks = 9;
let currentSlide = 1;  

async function fetchBooks() {
	try {
	   const response = await fetch('books.json'); 
	   if (!response.ok) {
		   throw new Error('Books cannot be fetched');  
	   }
	   books = await response.json(); 
       if (books.length > totalBooks) {
        books = books.slice(0, totalBooks);
    }
	   showBooks(currentSlide);  
   } catch (error) {
	   console.error("Error fetching books:", error); 
       alert("Failed to load books. Please try again later")
   }
}

fetchBooks();
function showBooks(slideIndex) {
    currentSlide = slideIndex;
    const slider = document.getElementById('slider');
    slider.innerHTML = '';  

     const start = slideIndex * booksPerPage;
    const end = start + booksPerPage;
    const currentBooks = books.slice(start, end); 

     currentBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

         bookDiv.innerHTML = `
            <img src="${book.bookImage}" alt="${book.bookTitle}" />
            <div class="book-detail">
            <h3>${book.bookTitle}</h3>
            <p class="author">Author: ${book.bookAuthor}</p>
            <p class="desc">${book.bookDescription}</p>
               <div class="rate">
                <i class="fa-solid fa-star"></i>
                <span>${book.bookRate}</span>
            </div>
             <p class="price">$${book.bookPrice}</p>
              <div class="book-info">
                <button class="add-to-cart">
                <i class="fa-solid fa-cart-shopping"></i>
                Add to Cart</button>
                <button class="view" data-id="${book.bookId}">View Detail</button>

            </div>
            </div>
        `;
        bookDiv.querySelector('.view').addEventListener('click', () => {
            window.location.href = `./html/book-detail.html?bookId=${book.bookId}`;
        });

         slider.appendChild(bookDiv);
    });
    updateDots(currentSlide);
 }
 
 function updateDots(activeIndex) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex); 
    });
}
function onDotClick(index) {
    showBooks(index);
}
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.onclick = () => onDotClick(index);
});

document.addEventListener('DOMContentLoaded', () => {
    updateDots(currentSlide);
});



function updateBooksPerPage() {
    const newBooksPerPage = window.innerWidth <= 992 ? 1 : 4;
    if (newBooksPerPage !== booksPerPage) {
        booksPerPage = newBooksPerPage;
        currentSlide = 0; 
        showBooks(currentSlide); 
    }
}

function nextSlide() {
    if ((currentSlide + 1) * booksPerPage < books.length) {
        currentSlide++; 
        showBooks(currentSlide);  
    }
}
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showBooks(currentSlide);
    }
}

document.getElementById('nextButton').addEventListener('click', nextSlide);
document.getElementById('prevButton').addEventListener('click', prevSlide);
window.addEventListener('resize', updateBooksPerPage);

