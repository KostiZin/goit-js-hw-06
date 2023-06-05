function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector(`#controls`).firstElementChild;

const inputElValue = inputEl.value;

console.dir(inputEl);
console.dir(inputElValue);

const btnCreate = inputEl.nextElementSibling;

// console.log(btnCreate);

const btnDestroy = btnCreate.nextElementSibling;

// console.dir(btnDestroy);

const divEl = document.querySelector(`#boxes`);

function createBoxes(amount) {
  let divNew = document.createElement(`div`);

  divNew.style.width = `30px`;
  divNew.style.height = `30px`;
  divNew.style.background = getRandomHexColor();

  divEl.append(divNew);

  return divNew;
}

console.dir(divEl);

// console.log(createBoxes());

btnDestroy.addEventListener(`click`, handleInputDestroy);

function handleInputDestroy(evt) {
  divEl.remove(divEl.children);
}

btnCreate.addEventListener(`click`, handleInputCreate);

function handleInputCreate(evt) {
  createBoxes(2);
}
