// /* === Mobile menu === */
// const openMenu = document.querySelector('#open-menu');
// const closeMenu = document.querySelector('#close-menu');
// const mobileNav = document.querySelector('.mobileScreens');
// const heroSection = document.querySelector('#hero');

// openMenu.addEventListener('click', () => {
//     mobileNav.classList.add('active');
//     openMenu.style.display = 'none';
//     closeMenu.style.display = 'block';
// });

// closeMenu.addEventListener('click', () => {
//     mobileNav.classList.remove('active');
//     closeMenu.style.display = 'none';
//     openMenu.style.display = 'block';
// });

// /* === blur background === */

// openMenu.addEventListener('click', () => {
//     heroSection.classList.add("blur");
//     console.log("cool")
// });
// closeMenu.addEventListener('click', () => {
//     heroSection.classList.remove("blur");
//     console.log("cool")
// });


/* === content hero image === */

const contentHeroImg = [
    "/images/books.png",
    "/images/man-reading-book.png",
    "/images/Man reading-pana.png",
    "/images/girl-reading-book.png",

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
let currentSlide = 0;  

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
    //    alert("Failed to load books. Please try again later")
    Swal.fire({
        title: "Error!",
        text:  'Failed to load books. Please try again later',
        icon: "error",
        confirmButtonText: "Try again"
      });
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
               <button class="go-to-shop-btn">View All Books</button>
                <button class="view" data-id="${book.bookId}">View Detail</button>

            </div>
            </div>
        `;
        bookDiv.querySelector('.view').addEventListener('click', () => {
            window.location.href = `./html/book-detail.html?bookId=${book.bookId}`;
        });
        bookDiv.querySelector('.go-to-shop-btn').addEventListener('click', () => {
            window.location.href = `./html/shop.html`;
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
    const newBooksPerPage = window.innerWidth <= 992 ? 1 : 3;
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

// Feedback
const feedbacks = [
    {
        comment: "This online bookstore has a fantastic selection! I found all my favorite authors and received my order quickly. Highly satisfied with the service!",
        stars: 5,
        date: "October 22, 2024",
        author: "Ahmed Ali",
        imageUrl: 'https://img.freepik.com/premium-photo/man-wearing-glasses-striped-shirt-holds-book_403587-3964.jpg?uid=R170454154&ga=GA1.1.130285263.1729434539&semt=ais_hybrid'

    },
    {
        comment: "Shopping here is a breeze! The website is easy to navigate, and my books arrived in perfect condition. Great experience overall!",
        stars: 4,
        date: "September 29, 2024",
        author: "Sarah Mursal",
        imageUrl: 'https://images.unsplash.com/photo-1613048645342-c54cda9c7be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlqYWIlMjBnaXJsJTIwcmVhZGluZyUyMGJvb2t8ZW58MHx8MHx8fDA%3D'
    },
    {
        comment: "Every time I order, I’m impressed! The delivery is prompt, and I love the thoughtful packaging. Definitely my go-to bookstore now!",
        stars: 3,
        date: "August 18, 2024",
        author: "David Miller",
        imageUrl: 'https://plus.unsplash.com/premium_photo-1668349758167-3c8849212507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwcmVhZGluZyUyMGJvb2t8ZW58MHx8MHx8fDA%3D'
    }
];
let currentIndex = 0;

 function displayFeedback(index) {
    const feedback = feedbacks[index];
    document.querySelector(".comment").textContent = feedback.comment;
    document.querySelector(".date").textContent = feedback.date;
    document.querySelector("#author").textContent = feedback.author;

     const starsContainer = document.querySelector(".rates");
    starsContainer.innerHTML = "";
    for (let i = 0; i < feedback.stars; i++) {
        const star = document.createElement("i");
        star.className = "fa-solid fa-star";
        starsContainer.appendChild(star);
    }
    document.querySelector("#feedImage").style.backgroundImage = `url('${feedback.imageUrl}')`;

}

 function showNext() {
    currentIndex = (currentIndex + 1) % feedbacks.length;
    displayFeedback(currentIndex);
}

 function showPrevious() {
    currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
    displayFeedback(currentIndex);
}

 displayFeedback(currentIndex);


//  Search Books

const searchForm = document.querySelector("#Searchform");
searchForm.addEventListener('submit',(e)=>{
   e.preventDefault();
   const searchInput = document.getElementById("searchInput").value.trim();
   if (searchInput) {
        window.location.href = `./html/searched-books.html?query=${encodeURIComponent(searchInput)}`;
    } else {
    //    alert("Please enter a book title or author.");
       Swal.fire({
        title: "Input Required",
        text:  'Please enter a book title or author.',
        icon: "error",
        confirmButtonText: "ok"
      });
       
   }

})
 