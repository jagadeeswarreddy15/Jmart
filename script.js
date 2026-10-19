const products = [
  {
    id: 1,
    name: "Sunflower Oil",
    price: 150,
    image: "images/sunflower-oil.jpg"
  },
  {
    id: 2,
    name: "Basmati Rice",
    price: 120,
    image: "images/basmati-rice.jpg"
  },
  {
    id: 3,
    name: "Salt",
    price: 25,
    image: "images/salt.jpg"
  },
  {
    id: 4,
    name: "Wheat Flour",
    price: 60,
    image: "images/wheat-flour.jpg"
  },
  {
    id: 5,
    name: "Chilli Powder",
    price: 80,
    image: "images/chilli-powder.jpg"
  },
  {
    id: 6,
    name: "Tea Powder",
    price: 100,
    image: "images/tea.jpg"
  },
  {
    id: 7,
    name: "Coffee Powder",
    price: 140,
    image: "images/coffee.jpg"
  },
  {
    id: 8,
    name: "Biscuits",
    price: 30,
    image: "images/biscuits.jpg"
  },
  {
    id: 9,
    name: "Potato Chips",
    price: 20,
    image: "images/potato-chips.jpg"
  },
  {
    id: 10,
    name: "Dishwash Liquid",
    price: 90,
    image: "images/dishwash-liquid.jpg"
  }
];

let cart = [];

function displayProducts() {
  const container = document.getElementById("products");

  if (!container) return;

  container.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    </div>
  `).join("");
}

function addToCart(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  cart.push(product);
  updateCart();

  alert(product.name + " added to cart!");
}

function updateCart() {
  const count = document.getElementById("cart-count");
  const total = document.getElementById("cart-total");

  if (count) {
    count.textContent = cart.length;
  }

  if (total) {
    const amount = cart.reduce(
      (sum, item) => sum + item.price,
      0
    );

    total.textContent = "₹" + amount;
  }
}

function searchProducts() {
  const searchInput = document.getElementById("search");
  const container = document.getElementById("products");

  if (!searchInput || !container) return;

  const searchText = searchInput.value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchText)
  );

  container.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    </div>
  `).join("");

  if (filteredProducts.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts();

  const searchInput = document.getElementById("search");

  if (searchInput) {
    searchInput.addEventListener("input", searchProducts);
  }
});
