document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const hamburger = document.createElement("div");
  hamburger.innerHTML = "☰";
  hamburger.classList.add("hamburger");
  document.body.appendChild(hamburger);

  hamburger.addEventListener("click", function () {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });
});
