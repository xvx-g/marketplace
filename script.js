 // JavaScript for Add to Cart functionality
    var cart = [];

    function addToCart(productName, price, quantityInputId) {
        var quantity = parseInt(document.getElementById(quantityInputId).value);
        var product = {
            name: productName,
            price: price,
            quantity: quantity
        };

        cart.push(product);
        alert('Added to cart: ' + productName);
        updateCart();
    }

    function updateCart() {
        var cartDisplay = document.getElementById('cart');
        var totalDisplay = document.getElementById('total');
        var cartContent = '';

        var total = 0;

        for (var i = 0; i < cart.length; i++) {
            var itemTotal = cart[i].price * cart[i].quantity;
            cartContent += cart[i].name + ' - $' + cart[i].price.toFixed(2) + ' x ' + cart[i].quantity + ' = $' + itemTotal.toFixed(2) + ' <button onclick="removeFromCart(' + i + ')">Remove</button><br>';
            total += itemTotal;
        }

        cartDisplay.innerHTML = cartContent;
        totalDisplay.innerHTML = total.toFixed(2);
    }

    function removeFromCart(index) {
        var removedProduct = cart.splice(index, 1);
        alert('Removed from cart: ' + removedProduct[0].name);
        updateCart();
    }

    function clearCart() {
        cart = [];
        alert('Cart cleared');
        updateCart();
    }

    function showCheckoutForm() {
        document.getElementById('checkoutForm').style.display = 'block';
    }

    function checkout(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var address = document.getElementById('address').value;

        if (cart.length === 0) {
            alert('Your cart is empty. Add items before checkout.');
            return;
        }

        // Simulate the checkout process (in a real-world scenario, this would involve server-side logic)
        alert('Thank you, ' + name + '! Your order has been placed.\nAn email confirmation will be sent to ' + email + '.\nYour items will be shipped to:\n' + address);

        // Clear the cart and hide the checkout form
        clearCart();
        document.getElementById('checkoutForm').style.display = 'none';
    }

    