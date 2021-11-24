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

// Create Slide Button
const slideBtnWrap = document.querySelector(".slide_btn_wrap");
const sildeCount = ul.childElementCount;
for(i = 0; i < sildeCount; i++){
  const button = document.createElement("button");
  button.innerText = i+1;
  slideBtnWrap.append(button);
}

// Change the slide, if the button is clicked.
const slideBtnAll = document.querySelectorAll(".slide_btn_wrap button");
slideBtnAll.forEach((item) => {
  item.addEventListener("click", () => {
    const currentSlide = document.querySelector(".show");
    let slideItem = document.querySelector(`ul li:nth-child(${item.innerText})`);
    clearInterval(slideInterval);
    currentSlide.classList.remove(SHOW_CLASS);
    slideItem.classList.add(SHOW_CLASS);
    stopBtn.innerText = "재생";
  });
});


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