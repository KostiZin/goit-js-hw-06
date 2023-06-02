const counterEl = document.querySelector(`#counter`);

// console.dir(counterEl);

const counterValue = document.querySelector(`#value`);

// console.log(counterValue);

const btnDecrease = counterEl.firstElementChild;
// console.log(btnDecrease);

const btnIncrease = counterEl.lastElementChild;

// console.log(btnIncrease);

btnDecrease.addEventListener(`click`, onClickDecrease);

function onClickDecrease(evt) {
  counterValue.textContent -= 1;
  //   console.log(evt.currentTarget);
}

btnIncrease.addEventListener(`click`, onClickIncrease);

function onClickIncrease() {
  counterValue.textContent -= -1;
  //   console.log(evt.currentTarget);
}
