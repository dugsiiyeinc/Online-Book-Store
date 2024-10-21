let books = [];
let booksPerPage =  window.innerWidth <= 768 ? 1 :4; 
let totalBooks = 12;
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
            <h3>${book.bookTitle}</h3>
            <p>Author: ${book.bookAuthor}</p>
               <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
              <div class="book-info">
                <p class="price">$${book.bookPrice}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;

         slider.appendChild(bookDiv);
    });
 }
 
function updateBooksPerPage() {
    const newBooksPerPage = window.innerWidth <= 768 ? 1 : 4;
    if (newBooksPerPage !== booksPerPage) {
        booksPerPage = newBooksPerPage;
        currentSlide = 0; 
        showBooks(currentSlide); 
    }
}

 function onDotClick(index) {
    showBooks(index);
}
function nextSlide() {
    if ((currentSlide + 1) * booksPerPage < books.length) {
        currentSlide++; 
        showBooks(currentSlide);  
    }
}


