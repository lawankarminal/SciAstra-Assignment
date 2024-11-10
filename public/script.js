// Cart to store selected items
let cart = [];

// Add course to cart
function addToCart(courseName, price) {
    cart.push({ courseName, price });
    alert(courseName + " added to cart!");
}

// Show cart summary when checking out
function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Please add some courses to the cart before proceeding.");
        return;
    }

    // Display cart items
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear existing cart items
    cartItemsContainer.innerHTML = '';

    // Calculate total price
    let totalPrice = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.courseName} - ₹${item.price}`;
        cartItemsContainer.appendChild(li);
        totalPrice += item.price;
    });

    // Update total price
    totalPriceElement.textContent = totalPrice;

    // Show cart summary
    document.getElementById('cart-summary').style.display = 'block';
}
