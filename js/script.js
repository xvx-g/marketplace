// Function to add a product to the cart
function addToCart(productName, price, quantityId) {
    // Get the quantity input element
    var quantityInput = document.getElementById(quantityId);
    // Get the quantity value
    var quantity = parseInt(quantityInput.value);
    
    // Calculate total price for this product
    var totalPrice = price * quantity;
    
    // Create a new entry for the cart
    var cartEntry = document.createElement('div');
    cartEntry.innerHTML = '<p>' + productName + ' - Quantity: ' + quantity + ' - Total: $' + totalPrice.toFixed(2) + '</p>';
    
    // Append the new entry to the cart
    document.getElementById('cart').appendChild(cartEntry);
    
    // Update the total price
    var totalElement = document.getElementById('total');
    var currentTotal = parseFloat(totalElement.textContent);
    totalElement.textContent = (currentTotal + totalPrice).toFixed(2);
}

// Function to clear the cart
function clearCart() {
    // Clear all entries in the cart
    document.getElementById('cart').innerHTML = '';
    
    // Reset the total price
    document.getElementById('total').textContent = '0.00';
}

// Function to show the checkout form
function showCheckoutForm() {
    // Display the checkout form
    document.getElementById('checkoutForm').style.display = 'block';
}

// Function to handle the checkout
function checkout(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    
    // Display a confirmation message
    alert('Thank you, ' + name + '! Your order has been placed.\nWe will deliver your items to:\n' + address + '\n\nAn email confirmation will be sent to: ' + email);
    
    // Clear the cart
    clearCart();
}
