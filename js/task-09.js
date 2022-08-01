function getRandomHexColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const refs = {
  bodyEl: document.body,
  buttonChangeColorEl: document.querySelector(".change-color"),
  spanColorEl: document.querySelector(".color"),
};

const onChangeBgColorClick = () => {
  const color = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = color;
  refs.spanColorEl.textContent = color;
};

refs.buttonChangeColorEl.addEventListener("click", onChangeBgColorClick);
