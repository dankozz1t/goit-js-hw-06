const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const itemsEl = ingredients.map((value) => {
  const item = document.createElement("li");
  item.textContent = value;
  item.classList.add("item");
  return item;
});

listEl.append(...itemsEl);
