const toggleBtn = document.querySelector(".toggle_btn");
const storeList = document.querySelector(".store_list");
const listItems = document.querySelectorAll(".store_list li");
const nextBtn = document.querySelector(".next_btn");

function removeShowClass() {
  storeList.classList.remove("show");
}

listItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const value = event.currentTarget.innerText;
    toggleBtn.innerText = value;
    storeList.classList.remove("show");
    nextBtn.removeAttribute("disabled");
  });
});

toggleBtn.addEventListener("click", () => {
  storeList.classList.toggle("show");
});

toggleBtn.addEventListener("blur", () => {
  setTimeout(removeShowClass, 150)
});