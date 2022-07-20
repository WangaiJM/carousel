const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const images = document.querySelectorAll(".images");

let current = 0;

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

const interval = setInterval(run, 3000);

function nextSlide() {
  current++;

  if (current > images.length - 1) current = 0;

  removeShow();
  show();
}

function prevSlide() {
  current--;

  if (current < 0) current = images.length - 1;

  removeShow();
  show();
}

function removeShow() {
  images.forEach((img) => {
    img.classList.remove("show");
  });
}

function show() {
  images[current].classList.add("show");
}

function run() {
  nextSlide();
}
