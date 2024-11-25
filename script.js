// script.js

// Sample data: list of products
const products = [
    { id: 1, name: "Laptop", price: 800.00, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpppb_a9yZ3A73PS0wYrpurrV-CPFezixzs2AZgaT8vHphmOzXEG08OoRQo9czdHGsS8ucNr47mcu0x9OBg0cYKHlFj1X4lAPPOO6Nb_3vlXX6d7BkSMUrQg" },
    { id: 2, name: "Smartphone", price: 500.00, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbU6Sgo5cpPIscc71j23veLWxZgbx6oXEMGH5bXli51I2dm_ljfcrqEyVft7vTJH_s4mCpe7K-qo16RtebHHe5eiFtauw4DuTAYGzOAe2vwITo-1ptZIYD" },
    { id: 3, name: "Headphones", price: 150.00, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRGe0RRmawnqdm0ixPXQ07EHQZRQ7xFry3afzLEjD693COGsWw1wKorQKryMZQsN4ZrgvgDmwACgN3Rh3q-rtWILHk4OExwzpV4kVAQtOoNpNyKChZuWbT1" },
    { id: 4, name: "Smartwatch", price: 200.00, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQo815ffwpisvGkeEO3WHU27-TghFLmMZYw1wE1j06um23eEwaetOqbGSmVrHnhpGEjEXgK-C0CBH-59No4aF1PmUfvLzP_uLEAzUh7woc7iCKGj8wFFYsx" },
    { id: 5, name: "Speaker", price: 700.00, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7Nq2wVIYrUrBwZ0YvlJCKsdKmisP8qofroEo2vgglbmRQ5GAyq4md0zXhjHPfpL17XqXkMqYDou6C3CSAVINSg6K0IoOV-JBxGaT4BMwEfJXvXnauV2dQ" },
    { id: 6, name: "Playstation", price: 15000.00, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiCfPU1yRjbuZ-zBO6GDlFKcfuR-5YkMl6szA3neBDHdreeRsbYpkwrLbyxVgM0OW24vksOSlSYKGPLg1rbSSNNxq9Q-S4XHiL8JfyOyQBYaQ4cKTsYXuzGw" },
    { id: 7, name: "Smart Tv", price: 1000.00, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxGbJ69As1g-3QBE9-EnC_fsy-VelpklsAVczfd7yaGYOoHQb1Bqm_y5cM9wzBS3QmjT58_nCVae7DMNgqighfU7qceDaX4Izih2n-Ojb5l8FukvEtTQnjoQ" },
    { id: 8, name: "Tshirt", price: 100.00, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSl9Ul0JkMkvT2BvZSwECqMOxhlmH_F0DGQscWR3A6qdEnxTDkl1TGhvosPAX1O3ksLwi0_H_R6VNxsKIK2sMcrkBR3gzzG82AxfDjkxgHK0GuI5PxHjj8Fwg" },
];

// Shopping cart array
let cart = [];

// Function to display products
function displayProducts(productList) {
    const productCatalog = document.getElementById("product-catalog");
    productCatalog.innerHTML = ""; // Clear the catalog

    productList.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productCatalog.appendChild(productCard);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = ""; // Clear cart items
    let total = 0;

    cart.forEach((item) => {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
        `;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    cartCount.innerText = cart.length;
    cartTotal.innerText = total.toFixed(2);
}

// Function to handle search
document.getElementById("search-bar").addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

// Function to show order notification
document.getElementById("checkout-btn").addEventListener("click", function () {
    const notification = document.getElementById("order-notification");
    notification.classList.remove("hidden");
    cart = []; // Clear cart
    updateCart(); // Update cart display
});

// Function to close order notification
function closeNotification() {
    const notification = document.getElementById("order-notification");
    notification.classList.add("hidden");
}

// Initial display of products
displayProducts(products);
