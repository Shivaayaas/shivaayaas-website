console.log("Script loaded and running...");
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = slides.length - 1; }
    
    let offset = -slideIndex * 100;
    document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
    
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function setSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

setInterval(nextSlide, 7000); // Auto-slide every 3 seconds
showSlide(slideIndex);

