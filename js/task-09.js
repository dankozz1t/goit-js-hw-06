function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector("body"),
  buttonChangeColorEl: document.querySelector(".change-color"),
  spanColorEl: document.querySelector(".color"),
};

const onChangeBgColorClick = () => {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.spanColorEl.textContent = color;
};

refs.buttonChangeColorEl.addEventListener("click", onChangeBgColorClick);
