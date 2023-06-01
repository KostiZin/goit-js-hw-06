const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector(`#ingredients`);

const elements = ingredients.map((ingredientsName) => {
  const liEl = document.createElement(`li`);
  liEl.textContent = ingredientsName;
  liEl.classList.add(`item`);

  return liEl;
});

console.log(elements);

ingredientsEl.append(...elements);

console.log(ingredientsEl);
