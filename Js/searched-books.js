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
                        <h2>${book.bookTitle}</h2>
                        <img src="${book.bookImage}" alt="${book.bookTitle}">
                        <p><strong>Author:</strong> ${book.bookAuthor}</p>
                        <p><strong>Category:</strong> ${book.bookCategory}</p>
                        <p><strong>Price:</strong> $${book.bookPrice}</p>
                         <p><strong>Rating:</strong> ${book.bookRate} / 5</p>
                        <p><strong>Published Year:</strong> ${book.bookYear}</p>
                        <p><strong>Pages:</strong> ${book.bookPages}</p>
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
