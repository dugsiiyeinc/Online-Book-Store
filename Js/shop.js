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
             <p class="book-price">Price: $${book.bookPrice}</p>
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

let cartItems = [];
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-cart")) {
        const bookItem = event.target.closest(".book-item");
        const bookTitle = bookItem.querySelector("h3").innerText;
        const bookImage = bookItem.querySelector("img").src;
        const bookPrice = parseFloat(bookItem.querySelector(".book-price").innerText.replace("Price: $", ""));

        const existingItem = cartItems.find(item => item.title === bookTitle);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            const cartItem = {
                title: bookTitle,
                image: bookImage,
                price: bookPrice,
                quantity: 1
            };
            cartItems.push(cartItem);
        }
        updateCartCount();
    }
});
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.innerText = cartItems.reduce((sum, item) => sum + item.quantity, 0);
}
document.getElementById("cart-icon").addEventListener("click", function() {
    showCartSummaryModal();
});

function showCartSummaryModal() {
    const modal = document.createElement("div");
    modal.className = "cart-modal";
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    let cartItemsHtml = cartItems.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="modal-book-image">
            <div class="cart-details">
                <h3>${item.title}</h3>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        </div>
    `).join("");

    modal.innerHTML = `
        <div class="cart-modal-content">
            <span class="close-modal">&times;</span>
            <h2>Your Cart</h2>
            <div class="cart-modal-body">${cartItemsHtml}</div>
            <div class="cart-footer">
                <p><strong>Total Price: $${totalPrice}</strong></p>
                <button class="checkout-btn">Check Out</button>
                <button class="view-cart-btn">View Cart</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".close-modal").onclick = () => modal.remove();
    modal.addEventListener("click", (event) => {
        if (event.target === modal) modal.remove();
    });
     modal.querySelector(".checkout-btn").onclick = () => {
        console.log("Checkout btn is clicked");
     };

    modal.querySelector(".view-cart-btn").onclick = () => {
        console.log("view cart btn is clicked");
     };  
}
