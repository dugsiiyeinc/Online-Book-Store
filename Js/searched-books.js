// Get the search query 
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
async function displaySearchedBooks() {
    const query = getQueryParam("query")?.toLowerCase() || ""; 
    const bookDisplay = document.getElementById("bookDisplay");
    const searchQueryDisplay = document.getElementById("searchQueryDisplay");  
   const searchInput = document.getElementById("searchInput");
   searchInput.value = query;
    searchQueryDisplay.textContent = `Showing results for "${query}"`;

    try {
        const response = await fetch('../books.json');
        const books = await response.json();
        const foundBooks = books.filter(book =>
            book.bookTitle.toLowerCase().includes(query) ||
            book.bookAuthor.toLowerCase().includes(query)
        );
        if (foundBooks.length > 0) {
            foundBooks.forEach(book => {
                bookDisplay.innerHTML += `
                    <div class="book-item">
                        <img src="${book.bookImage}" alt="${book.bookTitle}">
                        <h2>${book.bookTitle}</h2>
                        <p><strong>Author:</strong> ${book.bookAuthor}</p>
                        <p><strong>Category:</strong> ${book.bookCategory}</p>
                        <p><strong>Price:</strong> $${book.bookPrice}</p>
                        <div class="rate">
                        <span><strong>Rating: <i class="fa-solid fa-star"></i> ${book.bookRate}</strong></span></div>
                    <p><strong>Published Year:</strong> ${book.bookYear}</p>
                        <p><strong>Pages:</strong> ${book.bookPages}</p>
                        <button class="add-to-cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Add to Cart</button>
                     </div>
                `;
            });
        } else {
            bookDisplay.innerHTML = `<p>No books found for "${query}".</p>`;
        }
    } catch (error) {
        console.error("Error fetching books data:", error);
        bookDisplay.innerHTML = "<p>Sorry, there was an error loading the books.</p>";
    }

}
window.onload = displaySearchedBooks;
