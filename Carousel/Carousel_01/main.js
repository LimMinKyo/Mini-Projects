const ul = document.querySelector("ul");
const firstSlide = document.querySelector("ul li:first-child");
const lastSlide = document.querySelector("ul li:last-child");

const prevBtn = document.querySelector("button:first-child");
const stopBtn = document.querySelector("button:nth-child(2)");
const nextBtn = document.querySelector("button:last-child");

const SHOW_CLASS = "show";
const INTERVAL_TIME = 2000;

function showSlide() {
  const currentSlide = document.querySelector(".show");
  if (currentSlide === null) {
    firstSlide.classList.add(SHOW_CLASS);
  } else {
    currentSlide.classList.remove(SHOW_CLASS);
    if (currentSlide.nextElementSibling === null) {
      currentSlide.classList.remove(SHOW_CLASS);
      firstSlide.classList.add(SHOW_CLASS);
    } else {
      currentSlide.nextElementSibling.classList.add(SHOW_CLASS);
    }
  }
}

// ToggleSlideInterval
function toggleSlideInterval() {
  if(stopBtn.innerText === "일시정지") {
    clearInterval(slideInterval);
    stopBtn.innerText = "재생";
  } else if(stopBtn.innerText === "재생") {
    showSlide();
    slideInterval = setInterval(showSlide, INTERVAL_TIME);
    stopBtn.innerText = "일시정지";
  }
}

// Prev and Next Button
function changePrev() {
  const currentSlide = document.querySelector(".show");
  currentSlide.classList.remove(SHOW_CLASS);
  clearInterval(slideInterval);
  if (currentSlide.previousElementSibling === null) {
    lastSlide.classList.add(SHOW_CLASS)
  } else {
    currentSlide.previousElementSibling.classList.add(SHOW_CLASS);
  }
  stopBtn.innerText = "재생";
}
function changeNext() {
  const currentSlide = document.querySelector(".show");
  currentSlide.classList.remove(SHOW_CLASS);
  clearInterval(slideInterval);
  if (currentSlide.nextElementSibling === null) {
    firstSlide.classList.add(SHOW_CLASS);  
  } else {
    currentSlide.nextElementSibling.classList.add(SHOW_CLASS);
  }
  stopBtn.innerText = "재생";
}

// Execute function
showSlide();
let slideInterval = setInterval(showSlide, INTERVAL_TIME);

// EventListener
prevBtn.addEventListener("click", changePrev);
stopBtn.addEventListener("click", toggleSlideInterval);
nextBtn.addEventListener("click", changeNext);