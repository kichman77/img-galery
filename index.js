import galleryItems from "./gallery-items.js";
import refs from "./refs.js";
const { list, lightBox, overlay, boxContent, imgItem, btn } = refs;
console.log(galleryItems);

// console.log(list, lightBox, overlay, boxContent, imgItem, btn);

function createItem(obj) {
  // console.log(obj);
  const { description, original, preview } = obj;
  const itemImg = document.createElement("li");
  itemImg.classList.add("gallery__item");
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.setAttribute("href", "");
  const img = document.createElement("img");
  img.setAttribute("src", preview);
  img.setAttribute("data-source", original);
  img.setAttribute("alt", description);

  // console.log(itemImg);
  itemImg.appendChild(link);
  link.appendChild(img);
  return itemImg;
}

const items = galleryItems.map((item) => {
  // console.log(item);
  return createItem(item);
});
console.log(items);

list.append(...items);

list.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.dataset.source);
  let src = e.target.dataset.source;
  lightBox.classList.add("is-open");
  imgItem.src = src;
});

btn.addEventListener("click", ()=>{
  lightBox.classList.remove('is-open')
  imgItem.src = '';
})