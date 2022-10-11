// Show Menu
const navMenu = document.getElementById("nav-menu-list");

function navMenuToggle() {
  navMenu.classList.toggle("show-menu");
}

// Remove Menu
const navMenuLinks = document.querySelectorAll(".nav-menu-list-item-link");

function removeMenu() {
  navMenu.classList.remove("show-menu");
}

navMenuLinks.forEach((navMenuLink) =>
  navMenuLink.addEventListener("click", removeMenu)
);

// Change Theme
const bodyDocument = document.querySelector("body");

function changeTheme() {
  bodyDocument.classList.toggle("dark-theme");
}

// Buttons Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("btn-animation");
    } else {
      entry.target.classList.remove("btn-animation");
    }
  });
});

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => observer.observe(button));

// Scroll Reveal Animation
const scrollRev = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

scrollRev.reveal(
  `.home-info, .home-img, .about-info, .about-img, .services-content, .menu-content, .app-info, .app-img, .contact-info, .contact-button, .footer-content`,
  {
    interval: 200,
  }
);
