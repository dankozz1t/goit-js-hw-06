const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
const DEFAULT_NAME = "Anonymous";

const onAddTextInput = () => {
  const { input, output } = refs;

  output.textContent = input.value === "" ? DEFAULT_NAME : input.value;
};

refs.input.addEventListener("input", onAddTextInput);
