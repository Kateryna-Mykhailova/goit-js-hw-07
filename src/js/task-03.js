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


const createGallery = (array) => {
  array.forEach(element => {
  
  const parentEl = document.querySelector('#gallery');
  parentEl.insertAdjacentHTML('beforeend', `<li><img src='${element.url}' alt ='${element.alt}' > </li>`)

  }) 
  
  const newListElement = document.querySelector('li');
newListElement.classList = 'images';

};
createGallery(images);

