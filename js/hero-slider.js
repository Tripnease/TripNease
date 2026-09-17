document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".landing-page");
  if (!hero) return;

  const images = [
    "../img/hero-lake.jpg",
    "../img/hero-aurora.jpg"
  ];

  let index = 0;

  setInterval(function () {
    index = (index + 1) % images.length;
    hero.style.backgroundImage =
      "linear-gradient(90deg, rgba(5, 22, 31, .66), rgba(5, 22, 31, .18)), url('" + images[index] + "')";
  }, 5000);
});
