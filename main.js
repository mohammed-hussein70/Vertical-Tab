let buttons = document.querySelectorAll("button");
let text = document.querySelectorAll(".tab-text");

buttons.forEach((items, index) => {
  items.addEventListener("click", function () {
    text.forEach((item) => {
      item.classList.add("hidden");
    });
    text[index].classList.remove("hidden");
    buttons.forEach((item) => {
      item.classList.remove("back");
    });
    buttons[index].classList.add("back");
  });
});
