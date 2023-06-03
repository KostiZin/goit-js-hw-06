function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundEl = document.querySelector(`.color`);

const btnEl = document.querySelector(`.change-color`);

btnEl.addEventListener(`click`, onClick);

function onClick(evt) {
  backgroundEl.getRandomHexColor();
}
