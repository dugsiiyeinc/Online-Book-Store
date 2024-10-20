const booksPerPage = 4; 
let currentSlide = 1;  

async function fetchBooks() {
	try {
	   const response = await fetch('books.json'); 
	   if (!response.ok) {
		   throw new Error('Books cannot be fetched');  
	   }
	   books = await response.json(); 
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
        `;

         slider.appendChild(bookDiv);
    });

     updateDots(slideIndex);
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

