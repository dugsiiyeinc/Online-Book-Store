// List of image paths
const images = [
    "/images/Reading glasses-cuate.png",
    "/images/Reading glasses-pana.png",
    "/images/Book lover-amico.png"
];

 let currentImageIndex = 0;

function changeHeroImage() {
    const heroImage = document.getElementById('hero-img');
    heroImage.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length; 
}
 setInterval(changeHeroImage, 2000); 

let books = [];
    
//  books.json
fetch('/data/books.json')
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

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
document.addEventListener("DOMContentLoaded", function() {
    updateCartCount();
});

function addToCart(user, bookItem) {
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

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartCount();
}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("add-to-cart")) {
        const bookItem = event.target.closest(".book-item");
        addToCart(bookItem);
    }
});
// function updateCartCount() {
//     let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//      const cartCount = document.getElementById("cart-count");
//     cartCount.innerText = cartItems.reduce((sum, item) => sum + item.quantity, 0);
// }
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
                 <button class="view-cart-btn">View Cart</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".close-modal").onclick = () => modal.remove();
    modal.addEventListener("click", (event) => {
        if (event.target === modal) modal.remove();
    });

     modal.querySelector(".view-cart-btn").onclick = () => {
        window.location.href = '../html/cart.html';
    };
    //  Style
    const style = document.createElement("style");
style.innerHTML = `
    .cart-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
    .cart-modal-content {
        background: white;
        padding: 20px;
        border-radius: 8px;
        max-width: 600px;
        width: 100%;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        position: relative;
        text-align: center;
    }
    .cart-modal-body {
        display: flex;
         gap: 10px;
        flex-wrap:wrap;
        align-items:center;
    }
    .modal-book-image {
        width: 80px;
        height: 80px;
        border-radius: 4px;
    }
    .close-modal {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        cursor: pointer;
    }
     .view-cart-btn {
        margin-top: 15px;
        padding: 10px 20px;
        cursor: pointer; 
        font-weight:bold;
        border:2px solid #21758f;

    }
    .view-cart-btn{
        background-color: transparent;
        color: #21758f;
   }
     .view-cart-btn:hover{
              background-color: #5ca4b5;

     }
     @media(max-width:992px){
       .cart-modal {
        position: fixed;
        top: 100px;
         
    }

     }         
`;
document.head.appendChild(style);
}
