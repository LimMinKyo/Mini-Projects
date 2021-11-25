const dep1 = document.querySelector(".gnb");
const dep2 = document.querySelectorAll(".gnb ul");
const navBg = document.querySelector(".nav_bg");

dep2.forEach((item) => {
  dep1.addEventListener("mouseenter", () => {
    item.classList.add("show");
    navBg.classList.add("show");
  })
  dep1.addEventListener("mouseleave", () => {
    item.classList.remove("show");
    navBg.classList.remove("show");
  })
  navBg.addEventListener("mouseenter", () => {
    item.classList.add("show");
    navBg.classList.add("show");
  });
  navBg.addEventListener("mouseleave", () => {
    item.classList.remove("show");
    navBg.classList.remove("show");
  });
});

  

