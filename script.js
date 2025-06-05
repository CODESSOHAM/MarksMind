// MarksMind - JavaScript for interaction

document.addEventListener("DOMContentLoaded", () => {
  // Handle navbar active highlighting
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (window.location.href.includes(link.getAttribute("href"))) {
      link.style.backgroundColor = "#ffc107";
      link.style.color = "#343a40";
    }
  });

  // Hamburger toggle menu functionality
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-links');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});

console.log("MarksMind script loaded.");
