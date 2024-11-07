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
//  Newsletter

const newsletter = document.querySelector("#news-letter");

newsletter.addEventListener('submit',(event)=>{
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert("Thanks for your subscribing");
})

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
document.addEventListener("DOMContentLoaded", function() {
    updateCartCount();
});

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
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
    .checkout-btn, .view-cart-btn {
        margin-top: 15px;
        padding: 10px 20px;
        cursor: pointer; 
        font-weight:bold;
        border:2px solid #21758f;

    }
     .checkout-btn{
    background-color: #21758f;
    color:#fff;
     }
     .checkout-btn:hover{
         background-color: #5ca4b5;
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
