const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    alert("fuck data");
  } else {
    console.log({
      email: email.value,
      password: password.value,
    });
    event.currentTarget.reset();
  }
};

form.addEventListener("submit", onFormSubmit);
