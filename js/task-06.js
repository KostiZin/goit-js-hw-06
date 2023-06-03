const inputEl = document.querySelector(`#validation-input`);

// console.dir(inputEl);

const titleLength = inputEl.dataset.length;

// console.log(titleLength);

inputEl.addEventListener(`blur`, handleBlurColor);

function handleBlurColor(evt) {
  if (evt.currentTarget.value.trim().length === 0) {
    inputEl.classList.remove(`invalid`, `valid`);
  } else if (evt.currentTarget.value.trim().length !== Number(titleLength)) {
    inputEl.classList.add(`invalid`);
  } else {
    inputEl.classList.replace(`invalid`, `valid`);
  }
}
