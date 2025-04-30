document.addEventListener('DOMContentLoaded', () => {
  const imageData = sessionStorage.getItem('images');
  const benefitsData = sessionStorage.getItem('benefits');
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  // ✅ IMAGE SLIDER from sessionStorage (used for deal-of-the-day)
  if (swiperWrapper && imageData) {
    const imageArray = imageData.split(',');
    imageArray.forEach((src) => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = `<img src="${src}" alt="Product Image" class="w-full h-full object-cover rounded-xl">`;
      swiperWrapper.appendChild(slide);
    });

    new Swiper(".mySwiper", {
      loop: true,
      autoplay: { delay: 2000 },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
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

  // ✅ PRODUCT DETAILS from productData.js
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("product");
  const product = productDetails[productId];
  const prepareEl = document.getElementById("how-to-prepare");

  const titleEl = document.getElementById("product-name");
  const priceEl = document.getElementById("product-price");
  const weightEl = document.getElementById("product-weight");
  const expiryEl = document.getElementById("product-expiry");
  const descEl = document.getElementById("product-desc");
  const tagsEl = document.getElementById("product-tags");
  const benefitsEl = document.getElementById("product-benefits");
  const breadcrumbCategory = document.getElementById("breadcrumb-category");
  const breadcrumbProduct = document.getElementById("breadcrumb-product");
  const allergyEl = document.getElementById("product-allergy");
  const faqEl = document.getElementById("dynamic-faq");


  if (prepareEl && productId === "healthmix34") {
    prepareEl.innerHTML = `
      <h3 class="text-lg font-semibold mb-2">🧑‍🍳 How to Prepare</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Take 2 tablespoons of the health mix.</li>
        <li>Add to 1 cup of hot water or milk.</li>
        <li>Boil for 3-5 minutes while stirring.</li>
        <li>Add jaggery if needed. Serve warm.</li>
      </ul>
    `;
  }
  if (product) {
    titleEl.textContent = product.name;
    priceEl.textContent = product.price;
    weightEl.textContent = product.weight;
    expiryEl.textContent = product.expiry;
    allergyEl.textContent = `⚠️ Allergy Info: ${product.allergyInfo}`;
    descEl.textContent = product.description;

    tagsEl.innerHTML = product.tags.map(tag => `<span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">${tag}</span>`).join(" ");
    benefitsEl.innerHTML = product.benefits.map(b => `<li>✅ ${b}</li>`).join("");

    if (breadcrumbCategory && breadcrumbProduct) {
      breadcrumbCategory.innerHTML = `<a href="all-products.html" class="text-green-700 hover:underline">${product.category}</a>`;
      breadcrumbProduct.textContent = product.name;
    }

// ✅ FAQ Section

if (faqEl && product.category) {
  let faqHtml = `<h3 class="text-xl font-bold mb-4">❓ Frequently Asked Questions</h3>`;

  if (product.category.toLowerCase().includes("laddu")) {
    faqHtml += `
      <details class="mb-2"><summary class="cursor-pointer font-semibold">Is it safe for kids?</summary>
      <p class="text-sm mt-1">Yes, suitable for kids above 1 year old.</p></details>
      
      <details class="mb-2"><summary class="cursor-pointer font-semibold">Is it sugar-free?</summary>
      <p class="text-sm mt-1">No, it uses natural jaggery.</p></details>
    `;
  } else if (product.category.toLowerCase().includes("health")) {
    faqHtml += `
      <details class="mb-2"><summary class="cursor-pointer font-semibold">How to consume?</summary>
      <p class="text-sm mt-1">Mix 2 spoons with hot milk or water, sweeten with jaggery if needed.</p></details>
      
      <details class="mb-2"><summary class="cursor-pointer font-semibold">Can I give this to infants?</summary>
      <p class="text-sm mt-1">Suitable for children above 1 year.</p></details>
    `;
  }

  faqEl.innerHTML = faqHtml;
}
else if (faqEl) {
  faqEl.innerHTML = `<p class="text-gray-500">No FAQs available for this product.</p>`;
}
else {
  console.error("FAQ element not found or product category is undefined.");
}

    // ✅ Load Product Images Dynamically
    const formats = ['jpg', 'png', 'webp'];
    let loaded = 0;

    for (let i = 1; i <= 5; i++) {
      for (let format of formats) {
        const path = `${product.imageFolder}${i}.${format}`;
        const img = new Image();
        img.src = path;

        img.onload = () => {
          const slide = document.createElement("div");
          slide.classList.add("swiper-slide");
          slide.innerHTML = `<img src="${path}" alt="${product.name}" class="w-full h-full object-cover rounded-xl">`;
          swiperWrapper.appendChild(slide);
          loaded++;

          if (loaded === 1) {
            new Swiper(".mySwiper", {
              loop: true,
              autoplay: { delay: 2000 },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            });
          }
        };
        break; // once we try one format, skip to next i
      }
    }
  } else {
    document.getElementById("product-info").innerHTML = "<p class='text-red-500'>Product not found!</p>";
  }



  // ✅ ADD TO CART
  document.getElementById("add-to-cart-btn")?.addEventListener("click", () => {
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

  // ✅ WHATSAPP ORDER
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

  // Clear Cart from session
  localStorage.removeItem("shivaayaasCart");
});


// ✅ WHATSAPP Contact Button
document.getElementById("whatsapp-contact-btn")?.addEventListener("click", (e) => {
  e.preventDefault();
  const message = "Hello! I was browsing your website and found your products very interesting. I have a few questions and would love to know more! Could you also share some FAQs or additional details about your products?";
  const whatsappLink = `https://wa.me/919715661550?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, "_blank");
});




