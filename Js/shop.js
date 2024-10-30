let books = [];
    
//  books.json
fetch('../books.json')
    .then(response => response.json())
    .then(data => {
        books = data;
        displayRecommendedAndPopular();
    })
    .catch(error => console.error('Error fetching books:', error));

// Function to create book items
function createBookItems(bookArray) {
    const bookList = document.createElement('div');
    bookList.className = 'book-list';

    bookArray.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book-item';
        bookDiv.innerHTML = `
            <img src="${book.bookImage}" alt="${book.bookTitle}">
            <h3>${book.bookTitle}</h3>
            <p>By ${book.bookAuthor}</p>
             <p>Price: $${book.bookPrice}</p>
             <button class="add-to-cart">Add to cart</button>
        `;
        bookList.appendChild(bookDiv);
    });

    return bookList;
}

// Recommended and Popular books
function displayRecommendedAndPopular() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    // Recommended books
    const recommendedTitle = document.createElement('h2');
    recommendedTitle.className = 'section-title';
    recommendedTitle.innerText = 'Recommended';
    mainContent.appendChild(recommendedTitle);

    const recommendedBooks = books
        .slice()
        .sort((a, b) => b.bookYear - a.bookYear)
        .slice(0, 4);
    mainContent.appendChild(createBookItems(recommendedBooks));

    // Popular 
    const popularTitle = document.createElement('h2');
    popularTitle.className = 'section-title';
    popularTitle.innerText = 'Popular';
    mainContent.appendChild(popularTitle);

    const popularBooks = books
        .slice()
        .sort((a, b) => b.bookRate - a.bookRate)
        .slice(0, 4);
    mainContent.appendChild(createBookItems(popularBooks));
}

// Filter books by category
function filterBooks(category) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    const categoryTitle = document.createElement('h2');
    categoryTitle.className = 'section-title';
    categoryTitle.innerText = `Category: ${category}`;
    mainContent.appendChild(categoryTitle);

    const filteredBooks = books.filter(book => book.bookCategory === category);
    mainContent.appendChild(createBookItems(filteredBooks));
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
// Close the sidebar
function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("active");
}

 function selectCategory(category) {
    if (category === 'All Books') {
        displayRecommendedAndPopular();
    } else {
        filterBooks(category);
    }
    closeSidebar();
}

 document.querySelectorAll(".sidebar ul li").forEach(item => {
    item.addEventListener("click", function() {
        const category = this.textContent.trim(); 
        selectCategory(category);
    });
});