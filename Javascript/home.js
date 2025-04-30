console.log("Script loaded and running...");
let slideIndex = 0;
const slider = document.getElementById("banner-slider");
const dotsContainer = document.getElementById("slider-dots");

let slides = [];
let dots = [];

function loadSlides(folderPath = "./Images/Home_Banner/", max = 20) {
  for (let i = 1; i <= max; i++) {
    const img = new Image();
    img.src = `${folderPath}${i}.jpg`;

    img.onload = () => {
      const slide = document.createElement("div");
      slide.className = "slide";
      slide.innerHTML = `<img src="${img.src}" alt="Slide ${i}">`;
      slider.appendChild(slide);
      slides.push(slide);

      const dot = document.createElement("span");
      dot.className = "dot";
      dot.onclick = () => setSlide(slides.length - 1);
      dotsContainer.appendChild(dot);
      dots.push(dot);

      if (slides.length === 1) {
        showSlide(0); // Only show when first slide is loaded
      }
    };

    img.onerror = () => {
      // Stop if the image doesn't exist (assuming end of available slides)
    };
  }
}

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  else if (index < 0) slideIndex = slides.length - 1;
  else slideIndex = index;

  const offset = -slideIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[slideIndex]?.classList.add("active");
}

function nextSlide() {
  showSlide(slideIndex + 1);
}
function prevSlide() {
  showSlide(slideIndex - 1);
}
function setSlide(index) {
  showSlide(index);
}

setInterval(nextSlide, 4000);
loadSlides(); // Load from folder

// ✅ WHATSAPP Contact Button
document.getElementById("whatsapp-contact-btn")?.addEventListener("click", (e) => {
    e.preventDefault();
    const message = "Hello! I was browsing your website and found your products very interesting. I have a few questions and would love to know more! Could you also share some FAQs or additional details about your products?";
    const whatsappLink = `https://wa.me/919600254264?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  });