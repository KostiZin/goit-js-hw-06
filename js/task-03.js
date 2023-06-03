const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(`.gallery`);

const imagesEl = images
  .map(
    ({ url, alt }) =>
      `<li>
    <img class="img" src="${url}" alt="${alt}" />
  </li>`
  )
  .join("");

galleryEl.insertAdjacentHTML(`afterbegin`, imagesEl);


const styleImg = document.querySelectorAll(`.img`);


[...styleImg].map((img) => {
  img.style.marginBottom = '20px';
  img.style.height = 'auto';
  img.style.maxWidth = '100%';
});




// ======================================================

// Another way (example for myself) ========================

// const imagesEl = images.map(({ url, alt }) => {
//   const liEl = `
//   <li>
//     <img class="img" src="${url}" alt="${alt}" />
//   </li>`;

//   return liEl;
// });

// console.log(imagesEl);

// galleryEl.insertAdjacentHTML(`afterbegin`, imagesEl.join(""));

// console.log(galleryEl);

// Another way (example for myself) ========================
