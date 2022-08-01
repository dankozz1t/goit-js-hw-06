const input = document.querySelector("#validation-input");

const DATA_LENGTH = input.getAttribute(["data-length"]);

const replaceClass = (oldClass, newClass) => {
  input.classList.remove(oldClass);
  input.classList.add(newClass);
};

const onValidatorInput = () => {
  input.value.length == DATA_LENGTH
    ? replaceClass("invalid", "valid")
    : replaceClass("valid", "invalid");
};

input.addEventListener("blur", onValidatorInput);
