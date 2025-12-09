document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initSlider("hero", 5000);
  initSlider("reviews", 7000);
});

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

/**
 * Simple fading slider
 * @param {"hero"|"reviews"} type
 * @param {number} intervalMs
 */
function initSlider(type, intervalMs) {
  const slider = document.querySelector(`[data-slider="${type}"]`);
  if (!slider) return;

  const slides = slider.querySelectorAll(".slide, .review-slide");
  if (slides.length <= 1) return;

  let current = 0;
  slides[current].classList.add("active");

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, intervalMs);
}
