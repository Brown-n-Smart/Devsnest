const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-number]");
const equalBtn = document.querySelectorAll("[data-number]");
const allClearBtn = document.querySelectorAll("[data-number]");
const deleteBtn = document.querySelectorAll("[data-number]");
const numberBtns = document.querySelectorAll("[data-number]");

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
