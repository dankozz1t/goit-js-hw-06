function getRandomHexColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const refs = {
  input: document.querySelector("#controls input"),
  dataCreate: document.querySelector("button[data-create]"),
  dataDestroy: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.boxes.style.display = "flex";
refs.boxes.style.flexWrap = "wrap";
refs.boxes.style.padding = "20px";

function createBoxes(amount) {
  let markup = "";
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    markup += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}; margin: 2px;"></div>`;
    boxSize += 10;
  }
  console.log(markup);
  refs.boxes.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

refs.dataCreate.addEventListener("click", () => createBoxes(refs.input.value));
refs.dataDestroy.addEventListener("click", () => destroyBoxes());
