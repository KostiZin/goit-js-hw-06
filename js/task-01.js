const list = document.querySelectorAll(`.item`);

console.log(`Number of categories:`, list.length);

const category = document.querySelectorAll(`h2`);

category.forEach((h2) => console.log(`Category:`, h2.textContent));

// const lastElement = list.forEach((number) =>
//     console.log(`Elements:`, number.children.lastChild);
// );

// console.log([...list]);
