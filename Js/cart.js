let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
function displayCart() {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.innerHTML = '';
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }
    const cartTable = document.createElement('table');
    cartTable.className = 'cart-table';

     const headerRow = document.createElement('tr');
    headerRow.className = 'cart-header';
    headerRow.innerHTML = `
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Actions</th>
    `;
    cartTable.appendChild(headerRow);

    cartItems.forEach((item, index) => {
        const itemRow = document.createElement('tr');
        itemRow.className = 'cart-items';

         itemRow.innerHTML = `
            <td><img src="${item.image}" alt="${item.title}" class="cart-item-image"></td>
            <td>${item.title}</td>
            <td>$${item.price}</td>
            <td>
                <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
            </td>
            <td>$<span id="itemTotal-${index}">${(item.price * item.quantity).toFixed(2)}</span></td>
            <td><button class="delete-btn" onclick="confirmDelete(${index})">Delete</button></td>
        `;
        cartTable.appendChild(itemRow);
    });
    
    cartContainer.appendChild(cartTable);

     updateEstimatedTotal();

}
function updateQuantity(index, change) {
    cartItems[index].quantity += change;

     if (cartItems[index].quantity < 1) {
        cartItems[index].quantity = 1;
    }

     localStorage.setItem("cartItems", JSON.stringify(cartItems));

     displayCart();
}
function confirmDelete(index) {
    cartItems.splice(index, 1);

     localStorage.setItem("cartItems", JSON.stringify(cartItems));
    displayCart();

     if (cartItems.length === 0) {
        document.getElementById('estimatedTotal').innerText = '0.00';
    }
    updateCartCount();

}
function updateEstimatedTotal() {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    document.getElementById('estimatedTotal').innerText = total;
}

window.onload = displayCart;
 
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
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;
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
        openCheckoutModal();
        console.log("Checkout button clicked");
    };

     modal.querySelector(".view-cart-btn").onclick = () => {
        window.location.href = '../html/cart.html';
    };

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
            flex-wrap: wrap;
            align-items: center;
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
            font-weight: bold;
            border: 2px solid #21758f;
        }
        .checkout-btn {
            background-color: #21758f;
            color: #fff;
        }
        .checkout-btn:hover {
            background-color: #5ca4b5;
        }
        .view-cart-btn {
            background-color: transparent;
            color: #21758f;
        }
        .view-cart-btn:hover {
            background-color: #5ca4b5;
        }
    `;
    document.head.appendChild(style);
}
function openCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'block';
}



