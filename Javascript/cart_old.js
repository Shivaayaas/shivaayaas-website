// ✅ Global Cart State (load from localStorage)
let cart = JSON.parse(localStorage.getItem("shivaayaasCart")) || [];

// ✅ DOM Elements
const cartModal = document.getElementById("cart-modal");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");
const closeCart = document.getElementById("close-cart");
const closeCartBottom = document.getElementById("close-cart-bottom");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const whatsappCheckout = document.getElementById("whatsapp-checkout");

// ✅ Open Cart Sidebar
function openCart() {
  cartModal?.classList.remove("hidden");
  cartSidebar?.classList.remove("translate-x-full");
}

// ✅ Close Cart Sidebar
function closeCartSidebar() {
  cartSidebar?.classList.add("translate-x-full");
  setTimeout(() => {
    cartModal?.classList.add("hidden");
  }, 300);
}

// ✅ Save Cart to localStorage
function saveCart() {
  localStorage.setItem("shivaayaasCart", JSON.stringify(cart));
}

// ✅ Update Cart Count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}

// ✅ Render Sidebar Cart Items
function updateCartSidebar() {
  if (!cartItemsContainer || !cartTotal) return;

  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p class='text-gray-500'>Your cart is empty.</p>";
  } else {
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "flex justify-between items-center mb-3 border-b pb-2";
      div.innerHTML = `
        <div>
          <p class="font-semibold">${item.name}</p>
          <p class="text-sm text-gray-500">Qty: ${item.quantity} × ₹${item.price}</p>
        </div>
        <button onclick="removeItem(${index})" class="text-red-500 hover:text-red-700">✕</button>
      `;
      cartItemsContainer.appendChild(div);
    });
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = total;

  const summaryText = cart.map(item => `${item.name} - Qty: ${item.quantity}`).join('%0A');
  whatsappCheckout.href = `https://wa.me/919600254264?text=Hi%20Shivaayaas,%20I%20would%20like%20to%20order:%0A${summaryText}%0ATotal:%20₹${total}`;

  updateCartCount();
  saveCart();
}

// ✅ Remove Item From Cart
function removeItem(index) {
  cart.splice(index, 1);
  updateCartSidebar();
}

// ✅ Add to Cart From Product Detail Page (using ID)
function setupSingleProductAddBtn() {
  const singleAddBtn = document.getElementById("add-to-cart-btn");
  if (singleAddBtn) {
    singleAddBtn.addEventListener("click", () => {
      const name = document.getElementById("product-name")?.innerText || "Unknown Product";
      const priceText = document.getElementById("product-price")?.innerText || "₹0";
      const price = parseFloat(priceText.replace("₹", ""));

      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      updateCartSidebar();
      openCart();
    });
  }
}

// ✅ Add to Cart from All Products Page (using class)
function setupMultiProductAddBtns() {
  document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-name");
      const price = parseFloat(btn.getAttribute("data-price"));

      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }

      updateCartSidebar();
      openCart();
    });
  });
}

// ✅ Initial Setup on Page Load
document.addEventListener("DOMContentLoaded", () => {
  // Setup buttons
  setupSingleProductAddBtn();
  setupMultiProductAddBtns();

  // Cart Icon click (floating icon)
  const cartBtn = document.getElementById("cart-btn");
  cartBtn?.addEventListener("click", openCart);

  // Sidebar close buttons
  cartOverlay?.addEventListener("click", closeCartSidebar);
  closeCart?.addEventListener("click", closeCartSidebar);
  closeCartBottom?.addEventListener("click", closeCartSidebar);

  // Initial load
  updateCartSidebar();
  div.innerHTML = `
  <div>
    <p class="font-semibold">${item.name}</p>
    <p class="text-sm text-gray-500">₹${item.price} each</p>
    <div class="flex items-center gap-2 mt-1">
      <button onclick="updateQuantity(${index}, -1)" class="bg-gray-200 px-2 rounded hover:bg-gray-300">−</button>
      <span>${item.quantity}</span>
      <button onclick="updateQuantity(${index}, 1)" class="bg-gray-200 px-2 rounded hover:bg-gray-300">+</button>
    </div>
  </div>
  <button onclick="removeItem(${index})" class="text-red-500 hover:text-red-700">✕</button>
`;

function updateQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1); // remove if qty 0
  }
  updateCartSidebar();
  saveCart();
}

});


