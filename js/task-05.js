const inputEl = document.querySelector(`#name-input`);

const outputEl = document.querySelector(`#name-output`);

const unknownName = outputEl.textContent;

inputEl.addEventListener("input", enterName);

function enterName(evt) {
  if (evt.currentTarget.value === "") {
    outputEl.textContent = unknownName;
  } else {
    outputEl.textContent = evt.currentTarget.value.trim();
  }
}
