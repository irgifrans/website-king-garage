let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartCount.innerText = cart.length;
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.productName} - Rp ${item.price.toLocaleString()}`;
        cartItems.appendChild(li);
    });

    totalPriceElement.innerText = totalPrice.toLocaleString();
}

function showCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = 'flex';
}

function closeCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = 'none';
}

function checkout() {
    if (cart.length === 0) {
        alert('Keranjang Anda kosong!');
    } else {
        alert('Pembelian berhasil! Terima kasih telah berbelanja.');
        cart = [];
        totalPrice = 0;
        updateCart();
        closeCart();
    }
}
