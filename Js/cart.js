let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
function displayCart() {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.innerHTML = '';
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }
    cartItems.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';

         itemDiv.innerHTML = `
           <div class="book-detail"> 
           <div><img src="${item.image}" alt="${item.title}"></div>
            <div>${item.title}</div>
            </div>
            <div>$${item.price}</div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
            </div>
            <div>$<span id="itemTotal-${index}">${(item.price * item.quantity).toFixed(2)}</span></div>
            <div><button class="delete-btn" onclick="confirmDelete(${index})">Delete</button></div>
        `;

         cartContainer.appendChild(itemDiv);
    });

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
}
function updateEstimatedTotal() {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    document.getElementById('estimatedTotal').innerText = total;
}

window.onload = displayCart;

