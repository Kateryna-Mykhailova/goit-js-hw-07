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
// Используй массив объектов `images` для создания тегов `img` вложенных в `li`.
// Для создания разметки используй шаблонные строки и `insertAdjacentHTML()`.

// - Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// - Добавь минимальное оформление галереи флексбоксами или гридами через
//   css-классы.


//----1-----
// const createGallery = (array) => {
//   array.forEach(element => {

//      const newListElement = document.createElement('li');
//      newListElement.classList = 'images';
     
//      const url = element.url;
    
//     const parentEl = document.querySelector('ul#gallery')
//     parentEl.appendChild(newListElement);

// const newImgEl = document.createElement('img');
// newImgEl.src = element.url;
// newImgEl.alt = element.alt;
// newListElement.appendChild(newImgEl);
//   });
// };

// createGallery(images);

//-----2-------

// const parentEl = document.querySelector('#gallery');
// parentEl.classList = "images-list"

// const createGallery = (array) => {
//   array.forEach(element => {
//   parentEl.insertAdjacentHTML('beforeend', `<li class = "images-list_item"><img width = "320px" heigt = "180px"src='${element.url}' alt ='${element.alt}' > </li>`)
//   })  

// };
// createGallery(images);

//------3--------
const parentEl = document.querySelector('#gallery');
parentEl.classList = "images-list"

const elements = images.map(element => {

  return parentEl.insertAdjacentHTML('beforeend', `<li class = "images-list_item"><img width = "320px" heigt = "180px"src='${element.url}' alt ='${element.alt}' > </li>`)
});

parentEl.append(...elements)

const makeGallery = ({url, alt}) => {

}

const elements = images.map(makeGallery)

parentEl.append(...elements)