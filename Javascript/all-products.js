// all-products.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script loaded and running...");
  const filterButtons = document.querySelectorAll(".category-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      filterButtons.forEach((btn) => {
        btn.classList.remove("bg-green-600", "text-white");
        btn.classList.add("bg-gray-200", "text-gray-700");
      });
      button.classList.remove("bg-gray-200", "text-gray-700");
      button.classList.add("bg-green-600", "text-white");

      productCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        card.style.display = (filter === "all" || category === filter) ? "flex" : "none";
      });
    });
  });

  

  // 👜 Open & Close Cart Sidebar
  const cartButton = document.getElementById("cart-button");
  const cartModal = document.getElementById("cart-modal");
  const cartClose = document.getElementById("cart-close");
  const cartOverlay = document.getElementById("cart-overlay");

  cartButton?.addEventListener("click", () => {
    cartModal.classList.remove("translate-x-full");
    cartOverlay.classList.remove("hidden");
  });

  cartClose?.addEventListener("click", () => {
    cartModal.classList.add("translate-x-full");
    cartOverlay.classList.add("hidden");
  });

  cartOverlay?.addEventListener("click", () => {
    cartModal.classList.add("translate-x-full");
    cartOverlay.classList.add("hidden");
  });
});


document.querySelectorAll('.view-details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const productData = {
      id: button.dataset.id,
      name: button.dataset.name,
      price: button.dataset.price,
      image: button.dataset.image,
      description: button.dataset.description,
      weight: button.dataset.weight,
      tags: button.dataset.tags,
      benefits: button.dataset.benefits.split(',') // array
    };

    localStorage.setItem('selectedProduct', JSON.stringify(productData));
    window.location.href = 'product-detail.html';
  });
});

document.querySelectorAll('.view-details-btn').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    const benefits = this.getAttribute('data-benefits');
    const images = this.getAttribute('data-images');
    sessionStorage.setItem('benefits', benefits);
    sessionStorage.setItem('images', images);

    // Navigate to product page
    window.location.href = this.getAttribute('href');
  });
});
