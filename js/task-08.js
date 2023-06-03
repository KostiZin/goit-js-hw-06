const formEl = document.querySelector(`.login-form`);


formEl.addEventListener(`submit`, onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  const data = {
    email: email.value,
    password: password.value,
  };

  if (data.email === "" || data.password === "") {
    return alert(`All fields must be completed!`);
  }
  console.log(data);

  formEl.reset();
}
