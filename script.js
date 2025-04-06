// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  // If menu is currently shown, hide it; else show it
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

//Auto close menu when a link is clicked
document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    // Only hide the menu if we are on mobile-sized screen
    if (window.innerWidth < 768) {
    menu.style.display = "none";}
  });
});

// Open-source carousel
const projectsInner = document.querySelector(".projects-inner");
const dots = document.querySelectorAll(".dot");

let index = 0;

function updateProjects() {
  const offset = -index * 270;
  projectsInner.style.transform = `translateX(${offset}px)`; // Move to the next project

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index); // Highlights the current dot
  });
}

// Click on dots to jump to that slide
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateProjects();
  });
});
