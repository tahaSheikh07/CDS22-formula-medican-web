

let orders = [];

// Add item to the cart
function addToCart(productName) {
    orders.push(productName);
    alert(`${productName} added to your orders!`);
}

// Show the order popup
document.getElementById('view-orders').addEventListener('click', () => {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';

    if (orders.length === 0) {
        orderList.innerHTML = '<li>No orders yet!</li>';
    } else {
        orders.forEach((order) => {
            const li = document.createElement('li');
            li.textContent = order;
            orderList.appendChild(li);
        });
    }

    document.getElementById('order-popup').classList.remove('hidden');
});

// Close the order popup
function closePopup() {
    document.getElementById('order-popup').classList.add('hidden');
}