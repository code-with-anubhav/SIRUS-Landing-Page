//-----------------------
// Mobile Navbar Toggle
//-----------------------
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', function() {
  mobileMenu.classList.toggle('active');
  // Toggle icon: hamburger vs close
  hamburger.innerHTML = mobileMenu.classList.contains('active') ? '&times;' : '&#9776;';
});

// Toggle mobile dropdowns
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
mobileDropdownToggles.forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    const nextEl = toggle.nextElementSibling;
    if (nextEl && (nextEl.classList.contains('mobile-dropdown') || nextEl.classList.contains('mobile-nested-dropdown'))) {
      nextEl.style.display = nextEl.style.display === 'block' ? 'none' : 'block';
    }
  });
});

/*-----------------------
  Slider Functionality
-----------------------*/
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.arrow.prev');
const nextBtn = document.querySelector('.arrow.next');

let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Event Listeners for slider arrows
if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
}

// Event Listeners for slider dots
dots.forEach(dot => {
  dot.addEventListener('click', function() {
    const index = parseInt(this.getAttribute('data-index'));
    currentIndex = index;
    showSlide(currentIndex);
  });
});

/*-----------------------
  Request A Call Back Form Handling
-----------------------*/
document.getElementById('callbackForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting
  const name = document.getElementById('name').value;
  const country = document.getElementById('country').value;
  const contact = document.getElementById('contact').value;
  
  // Here you can integrate your AJAX call or form validation
  console.log('Request A Call Back:', { name, country, contact });
  alert('Thank you! We will contact you soon.');
  this.reset();
});
