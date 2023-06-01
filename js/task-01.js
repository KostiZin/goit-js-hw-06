const list = document.querySelectorAll(`.item`);

console.log(`Number of categories:`, list.length);

const category = document.querySelectorAll(`h2`);

// console.log(category);

category.forEach((h2) => {
  console.log(
    `Category: ` +
      h2.textContent +
      `; \nElements: ` +
      h2.nextElementSibling.children.length
  );
});

// Just querySelector (example for myself) ==========================

// const list = document.querySelector(`#categories`);

// console.log(`Number of categories:`, list.children.length);

// const category = document.querySelector(`.item`);

// console.log(`Category:`, category.firstElementChild.textContent);

// console.log(`Elements:`, category.lastElementChild.children.length);

// Just querySelector (example for myself) ==========================
