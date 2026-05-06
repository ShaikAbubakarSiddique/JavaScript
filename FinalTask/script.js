const url = "https://fakestoreapi.com/products";

const productContainer = document.getElementById("products");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const sortSelect = document.getElementById("sort");

let allProducts = [];

// Fetch Data
fetch(url)
  .then(res => {
    if (!res.ok) throw new Error("Failed");
    return res.json();
  })
  .then(data => {
    loading.style.display = "none";
    allProducts = data;

    displayProducts(data);
    loadCategories(data);
  })
  .catch(() => {
    loading.innerText = "Failed to load data";
  });

// Display Function
function displayProducts(data) {
  productContainer.innerHTML = "";

  data.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${product.title.substring(0,50)}</h3>
      <img src="${product.image}">
      <p>₹ ${product.price}</p>
      <p>${product.description.substring(0,60)}...</p>
      <button onclick="viewMore(${product.id})">View More</button>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productContainer.appendChild(card);
  });
}

// View More
function viewMore(id) {
  const product = allProducts.find(p => p.id === id);
  alert(product.title + "\n\n" + product.description);
}

// Search
searchInput.addEventListener("input", () => {
  filterProducts();
});

// Category
function loadCategories(data) {
  const categories = [...new Set(data.map(p => p.category))];

  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}

categorySelect.addEventListener("change", filterProducts);

// Sort
sortSelect.addEventListener("change", filterProducts);

// Filter Logic
function filterProducts() {
  let filtered = [...allProducts];

  // Search
  const searchText = searchInput.value.toLowerCase();
  filtered = filtered.filter(p =>
    p.title.toLowerCase().includes(searchText)
  );

  // Category
  if (categorySelect.value !== "all") {
    filtered = filtered.filter(p =>
      p.category === categorySelect.value
    );
  }

  // Sort
  if (sortSelect.value === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

// Add to Cart
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = allProducts.find(p => p.id === id);
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to Cart!");
}