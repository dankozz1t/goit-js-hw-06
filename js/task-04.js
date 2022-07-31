const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");
let counterValue = 0;

const onButtonIncrementClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const onButtonDecrementClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

buttonIncrement.addEventListener("click", onButtonIncrementClick);
buttonDecrement.addEventListener("click", onButtonDecrementClick);
