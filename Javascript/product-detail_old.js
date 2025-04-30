document.addEventListener('DOMContentLoaded', function () {
  const product = JSON.parse(localStorage.getItem('selectedProduct'));

  if (!product) {
    document.getElementById('productDetailContainer').innerHTML = "<p class='text-center text-xl'>No product data found.</p>";
    return;
  }

  document.title = `${product.name} | Shivaayaas`;

  document.getElementById('productDetailContainer').innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <!-- Image -->
      <div class="rounded-xl overflow-hidden shadow-md">
        <img src="${product.image}" alt="${product.name}" 
  class="w-full max-w-md aspect-square object-cover rounded-xl mx-auto md:mx-0 shadow-md" />

      </div>

      <!-- Info -->
      <div>
        <h1 class="text-3xl font-bold mb-3">${product.name}</h1>
        <p class="text-green-700 text-xl font-semibold mb-3">₹${product.price}</p>
        <p class="text-gray-600 mb-4">${product.info}</p>
        <p class="text-gray-700 mb-6">${product.desc}</p>

        <a href="https://wa.me/919600254264?text=Hi%2C%20I%20want%20to%20order%20${encodeURIComponent(product.name)}" target="_blank"
          class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition">
          🟢 Order Now on WhatsApp
        </a>
      </div>
    </div>
  `;
});


// 🌀 Swiper JS for Product Images
  const product = JSON.parse(localStorage.getItem('selectedProduct'));

  if (product) {
    document.title = `${product.name} - Shivaayaas`;

    document.querySelector('h2').textContent = product.name;
    document.querySelector('.text-green-700').textContent = `${product.price}₹`;
    //document.querySelector('.text-sm.text-gray-500').textContent = `${product.weight} • ${product.tags}`;
    document.querySelector('p.text-base').textContent = product.description;
    slide.innerHTML = `<img src="${src}" alt="${product.name}" class="w-full h-full object-cover" />`;

    // 🖼️ Image Slider
    const imagePaths = [
        "./Images/Healthmix34/1.png",
        "./Images/Healthmix34/2.jpg",
        "./Images/Healthmix34/3.png",
        "./Images/Healthmix34/4.png",
        "./Images/Healthmix34/5.png",
        "./Images/Healthmix34/6.jpg",
        "./Images/Healthmix34/7.jpg",
      ];
    // 🖼️ Image Slider      

    const swiperWrapper = document.querySelector('.swiper-wrapper');
    imagePaths.forEach(src => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = `<img src="${src}" alt="${product.name}" class="w-full h-full object-cover" />`;
      swiperWrapper.appendChild(slide);
    });

    // ✅ Benefits
    const benefitsList = document.querySelector('ul.list-disc');
    benefitsList.innerHTML = '';
    product.benefits.forEach(b => {
      const li = document.createElement('li');
      li.textContent = '✅ ' + b;
      benefitsList.appendChild(li);
    });





    
    // 🌀 Init Swiper
    new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true
    });
  }

  