function init() {
  eventBind();
}

function eventBind() {
  const menuBtn = document.querySelector(".menu-btn");
  const menuNav = document.querySelector("nav");

  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menuNav.classList.toggle("active");
  });
}

init();
