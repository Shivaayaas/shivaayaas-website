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
const clearCartBtn = document.getElementById("clear-cart");
const customerNote = document.getElementById("customer-note")?.value.trim();
const relatedContainer = document.getElementById("related-products");

  // ✅ Related Products
  if (relatedContainer && productDetails) {
    const allProducts = Object.entries(productDetails);
    const productId = new URLSearchParams(window.location.search).get("product");
    const filtered = allProducts.filter(([id]) => id !== productId);
    const randomSuggestions = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);
  
    relatedContainer.innerHTML = randomSuggestions.map(([id, p]) => `
      <a href="product-detail.html?product=${id}" class="bg-white rounded-lg p-3 shadow hover:shadow-lg transition block">
        <img src="${p.imageFolder}1.jpg" class="rounded mb-2" />
        <p class="text-sm font-semibold text-gray-800">${p.name}</p>
        <p class="text-green-600 font-bold text-sm">${p.price}</p>
      </a>
    `).join("");
  }

// ✅ WhatsApp Message
if (customerNote) {
  message += `%0A📌 *Note:* ${customerNote}`;
}


// ✅ Clear Cart
clearCartBtn?.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear the cart?")) {
    cart = [];
    updateCartSidebar();
  }
});


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
      const product = productDetails[item.id];
      let baseWeight = 0;

      if (product && product.weight) {
        const weightMatch = product.weight.match(/\d+/);
        baseWeight = weightMatch ? parseInt(weightMatch[0]) : 0;
      }

      const totalWeight = baseWeight * item.quantity;

      const div = document.createElement("div");
      div.className = "flex justify-between items-start mb-4";
      div.innerHTML = `
        <div class="flex-1">
          <p class="font-semibold">${item.name}</p>
          <p class="text-sm text-gray-500">Qty: ${item.quantity} × ₹${item.price}</p>
          <p class="text-xs text-gray-400">Total: ${totalWeight}g (${baseWeight}g per unit)</p>
          <div class="flex items-center gap-2 mt-1">
            <button onclick="updateQuantity(${index}, -1)" class="bg-gray-200 px-2 rounded hover:bg-gray-300">−</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)" class="bg-gray-200 px-2 rounded hover:bg-gray-300">+</button>
          </div>
        </div>
        <button onclick="removeItem(${index})" class="text-red-500 hover:text-red-700">✕</button>
      `;
      cartItemsContainer.appendChild(div);
    });
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = total;

  const summaryText = cart.map(item => `${item.name} - Qty: ${item.quantity}`).join('%0A');
  whatsappCheckout.href = `https://wa.me/919715661550?text=Hi%20Shivaayaas,%20I%20would%20like%20to%20order:%0A${summaryText}%0ATotal:%20₹${total}`;

  whatsappCheckout.addEventListener("click", function (e) {
    if (cart.length === 0) {
      e.preventDefault();
      alert("Thank you for your interest! But your cart is empty.");
      return;
    }
  });

  updateCartCount();
  saveCart();
}

// ✅ Add to Cart from Detail Page
function setupSingleProductAddBtn() {
  const singleAddBtn = document.getElementById("add-to-cart-btn");
  if (singleAddBtn) {
    singleAddBtn.addEventListener("click", () => {
      const id = new URLSearchParams(window.location.search).get("product");
      const name = document.getElementById("product-name")?.innerText || "Unknown Product";
      const priceText = document.getElementById("product-price")?.innerText || "₹0";
      const price = parseFloat(priceText.replace("₹", ""));

      const existing = cart.find(item => item.id === id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ id, name, price, quantity: 1 });
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
      const id = btn.getAttribute("data-id");
      const name = btn.getAttribute("data-name");
      const price = parseFloat(btn.getAttribute("data-price"));

      const existing = cart.find(item => item.id === id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ id, name, price, quantity: 1 });
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