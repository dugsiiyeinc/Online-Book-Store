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
        itemRow.className = 'cart-item';

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
}
function updateEstimatedTotal() {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    document.getElementById('estimatedTotal').innerText = total;
}

window.onload = displayCart;

