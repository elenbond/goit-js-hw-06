const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const imagesList = document.querySelector(".gallery");
imagesList.classList.add("list");

console.log(imagesList);
const list = images.map(image => {
  const imagesListItem = `<li><img src="${image.url}" alt="${image.alt}"</li>`;
  return imagesListItem;
});

imagesList.insertAdjacentHTML("afterbegin", list.join(" "));

const listItem = document.querySelectorAll("li");
const listItemClass = listItem.forEach(item => {
  item.classList.add("item");
});

const listItemImg = document.querySelectorAll("img");
const listItemImgClass = listItemImg.forEach(item => {
  item.classList.add("photo");
});
