// hover effect
let img_2 = document.querySelector("#img-2");
let overlay = document.querySelector(".overlay");

img_2.addEventListener("mouseenter", function () {
  overlay.style.opacity = "1"; // Set opacity to 1 to show the overlay
  overlay.style.visibility = "visible"; // Set visibility to visible
});

img_2.addEventListener("mouseleave", function () {
  overlay.style.opacity = "0"; // Set opacity to 0 to hide the overlay
  overlay.style.visibility = "hidden"; // Set visibility to hidden
});

const button_view_all = document.getElementById("view-all");
const active = document.getElementById("active");
const img = document.querySelectorAll(".img");
button_view_all.addEventListener("click", function () {
  if (button_view_all.classList.contains("active")) {
    button_view_all.innerHTML = "View More Residences";
  } else {
    button_view_all.innerHTML = "View Less Residences";
  }

  button_view_all.classList.toggle("active");
  img.forEach(function (img) {
    if (img.classList.contains("disable")) {
      img.classList.toggle("disable");
      console.log("Toggled image visibility");
    }
  });
});
