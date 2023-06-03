const inputEl = document.querySelector(`#validation-input`);

console.dir(inputEl);

// const inputValid = document.querySelector(`#validation-input.valid`);

// const inputInvalid = document.querySelector(`#validation-input.invalid`);

// console.log(inputInvalid);

const titleLength = 6;

inputEl.addEventListener(`blur`, blurColor);

function blurColor(evt) {
  if (evt.currentTarget.selectionEnd === titleLength) {
    inputEl.style.border = `2px solid green`;
  } else {
    inputEl.style.border = `2px solid red`;
  }
}
