// ✅ Global Cart State
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
const cartBtn = document.getElementById("cart-btn");

// ✅ Open & Close
function openCart() {
  cartModal?.classList.remove("hidden");
  cartSidebar?.classList.remove("translate-x-full");
}
function closeCartSidebar() {
  cartSidebar?.classList.add("translate-x-full");
  setTimeout(() => {
    cartModal?.classList.add("hidden");
  }, 300);
}

// ✅ Save Cart
function saveCart() {
  localStorage.setItem("shivaayaasCart", JSON.stringify(cart));
}

// ✅ Update Count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}

// ✅ Quantity Modifier
function updateQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  updateCartSidebar();
  saveCart();
}

// ✅ Remove Item
function removeItem(index) {
  cart.splice(index, 1);
  updateCartSidebar();
  saveCart();
}

// ✅ Render Sidebar Cart
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
          <p class="text-sm text-gray-500">₹${item.price} each</p>
          <div class="flex items-center gap-2 mt-1">
            <button onclick="updateQuantity(${index}, -1)" class="bg-gray-200 px-2 rounded hover:bg-gray-300">−</button>
            <span class="w-6 text-center">${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)" class="bg-gray-200 px-2 rounded hover:bg-gray-300">+</button>
          </div>
        </div>
        <button onclick="removeItem(${index})" class="text-red-500 hover:text-red-700 text-xl">✕</button>
      `;
      cartItemsContainer.appendChild(div);
    });
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = total;

  const summaryText = cart.map(item => `${item.name} - Qty: ${item.quantity}`).join('%0A');
  whatsappCheckout.href = `https://wa.me/919715661550?text=Hi%20Shivaayaas,%20I%20would%20like%20to%20order:%0A${summaryText}%0ATotal:%20₹${total}`;

  updateCartCount();
  saveCart();
}

// ✅ Add to Cart from Detail Page
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

// ✅ Add to Cart from All Products
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

// ✅ Setup Everything on Page Load
document.addEventListener("DOMContentLoaded", () => {
  setupSingleProductAddBtn();
  setupMultiProductAddBtns();

  cartBtn?.addEventListener("click", openCart);
  cartOverlay?.addEventListener("click", closeCartSidebar);
  closeCart?.addEventListener("click", closeCartSidebar);
  closeCartBottom?.addEventListener("click", closeCartSidebar);

  updateCartSidebar();
});
