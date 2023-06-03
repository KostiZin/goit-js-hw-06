const formEl = document.querySelector(`.login-form`);

console.dir(formEl);

formEl.addEventListener(`submit`, onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  const data = {
    email: email.value,
    password: password.value,
  };

  if (data.email === "" || data.password === "") {
    return alert(`Всі поля повинні бути заповнені`);
  }
  console.log(data);

  formEl.reset();
}
