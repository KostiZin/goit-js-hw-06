const fontSizeEl = document.querySelector(`#font-size-control`);

console.dir(fontSizeEl);

const changeTextEl = document.querySelector(`#text`);

console.dir(changeTextEl);

fontSizeEl.addEventListener(`input`, handleChangeFontSize);

function handleChangeFontSize() {
  let changedFont = fontSizeEl.value + "px";
  changeTextEl.style.fontSize = changedFont;
}

// Example for myself ==========================

// Getting the current font-size

// const compStyles = window.getComputedStyle(changeTextEl);

// const initialFontSize = compStyles.getPropertyValue(`font-size`);

// let fontSizeChange = parseFloat(initialFontSize);

// console.log(fontSizeChange);

// function handleDecreaseFontSize() {
//   fontSizeChange += 1;
//   changeTextEl.style.fontSize = `${fontSizeChange}px`;
// }
