// create nav menu in index.html
// -- Home
// -- Work
// -- About
// -- Contact

// hide menu by default. Use CSS to hide by default.

// create button to show/hide off-canvas menu

// create a click event listener
const elemOffCanvasMenu = document.getElementById("off-canvas-menu");
const elemBtnContainer = document.getElementById("btn-container");
const elemToggleBtn = document.getElementById("menu-toggle-button");

elemToggleBtn.addEventListener("click", () => {
  event.preventDefault();
  elemOffCanvasMenu.classList.toggle("show");
  elemBtnContainer.classList.toggle("slide-right");
});
// create CSS 'show' class

// toggle 'show' class to display or hide the menu when the button is clicked
