document.addEventListener('DOMContentLoaded', () => {
  const imageData = sessionStorage.getItem('images');
  const benefitsData = sessionStorage.getItem('benefits');

  // ✅ IMAGE SLIDER
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  if (swiperWrapper && imageData) {
    const imageArray = imageData.split(',');
    imageArray.forEach((src) => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = `<img src="${src}" alt="Product Image" class="w-full h-full object-cover rounded-xl">`;
      swiperWrapper.appendChild(slide);
    });
  }

  // ✅ BENEFITS LIST
  const benefitsList = document.querySelector('.benefits-list');
  if (benefitsList && benefitsData) {
    const benefitItems = benefitsData.split(',');
    benefitsList.innerHTML = '';
    benefitItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `✅ ${item.trim()}`;
      benefitsList.appendChild(li);
    });
  }
});



// ✅ PRODUCT DETAILS

// 🧩 Get product ID from query string (like ?product=kambu)
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product");

// 🌾 Fetch product data from productDetails object
const product = productDetails[productId];


// 🌟 Breadcrumb Update
const breadcrumbCategory = document.getElementById("breadcrumb-category");
const breadcrumbProduct = document.getElementById("breadcrumb-product");

if (product && breadcrumbCategory && breadcrumbProduct) {
  breadcrumbCategory.innerHTML = `<a href="all-products.html" class="text-green-700 hover:underline">${product.category}</a>`;
  breadcrumbProduct.textContent = product.name;
}


// 🎯 DOM References
const titleEl = document.getElementById("product-name");
const priceEl = document.getElementById("product-price");
const weightEl = document.getElementById("product-weight");
const expiryEl = document.getElementById("product-expiry");
const descEl = document.getElementById("product-desc");
const tagsEl = document.getElementById("product-tags");
const benefitsEl = document.getElementById("product-benefits");
const swiperWrapper = document.querySelector(".swiper-wrapper");

// 💡 Inject values into HTML
if (product) {
  titleEl.textContent = product.name;
  priceEl.textContent = product.price;
  weightEl.textContent = product.weight;
  expiryEl.textContent = product.expiry;
  descEl.textContent = product.description;

  // Tags
  tagsEl.innerHTML = product.tags.map(tag => `<span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">${tag}</span>`).join(" ");

  // Benefits
  benefitsEl.innerHTML = product.benefits.map(ben => `<li>✅ ${ben}</li>`).join("");

  // 🖼️ Images for Slider

  
  for (let i = 1; i <= 5; i++) {
    //const imageSrc = `${product.imageFolder}${i}.jpg`;
    // const imageSrc = `${product.imageFolder}${i}.png`; // Removed duplicate declaration
    const formats = ['png', 'jpg', 'webp'];
    let imageFound = false;

    formats.forEach(format => {
      if (!imageFound) {
      const imageSrc = `${product.imageFolder}${i}.${format}`;
      const img = new Image();
      img.src = imageSrc;

      img.onload = () => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.innerHTML = `<img src="${imageSrc}" class="w-full h-full object-cover rounded-xl" alt="${product.name}">`;
        swiperWrapper.appendChild(slide);
        imageFound = true;
      };
      }
    });
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `<img src="${imageSrc}" class="w-full h-full object-cover rounded-xl" alt="${product.name}">`;
    swiperWrapper.appendChild(slide);
  }
} else {
  document.getElementById("product-info").innerHTML = "<p class='text-red-500'>Product not found!</p>";
}


document.getElementById("add-to-cart-btn")?.addEventListener("click", () => {
  const product = productDetails[productId]; // `productId` is parsed from URL
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("shivaayaasCart")) || [];

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price.replace("₹", ""),
      qty: 1
    });
  }

  localStorage.setItem("shivaayaasCart", JSON.stringify(cart));
  alert("✅ Added to cart!");
});


// Whatsapp Order
document.getElementById("whatsapp-order-btn")?.addEventListener("click", (e) => {
  e.preventDefault();

  const cart = JSON.parse(localStorage.getItem("shivaayaasCart")) || [];
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  let message = "🛍️ *Shivaayaas Order*%0A--------------------%0A";

  let total = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.qty * parseFloat(item.price);
    total += itemTotal;
    message += `*${index + 1}. ${item.name}* x${item.qty} - ₹${itemTotal}%0A`;
  });

  message += `--------------------%0A*Total: ₹${total}*%0A%0A🛵 Please deliver to:`;

  const whatsappLink = `https://wa.me/919715661550?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, "_blank");
});

localStorage.removeItem("shivaayaasCart");
