const booksPerPage = 4; 
let currentSlide = 1;  

async function fetchBooks() {
	try {
	   const response = await fetch('books.json'); // Path to your local JSON file
	   if (!response.ok) {
		   throw new Error('Books cannot be fetched'); // Handle error if fetch fails
	   }
	   books = await response.json(); // Parse and store the JSON data
	   showBooks(currentSlide); // Show the initial books
   } catch (error) {
	   console.error("Error fetching books:", error); // Log any errors
   }
}
fetchBooks();