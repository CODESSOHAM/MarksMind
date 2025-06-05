// MarksMind - JavaScript for interaction


document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (window.location.href.includes(link.getAttribute("href"))) {
      link.style.backgroundColor = "#ffc107";
      link.style.color = "#343a40";
    }
  });
});

// Future enhancements (interactive tabs, modals, etc.) can be added here
console.log("MarksMind script loaded.");
