function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector(`.color`);

const btnEl = document.querySelector(`.change-color`);

const backgroundEl = document.querySelector(`.widget`)

btnEl.addEventListener(`click`, onClick);

function onClick(evt) {
    
    backgroundEl.parentElement.style.backgroundColor = getRandomHexColor();
  
    colorEl.textContent = backgroundEl.parentElement.style.backgroundColor;
  }
