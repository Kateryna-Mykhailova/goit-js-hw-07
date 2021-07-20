const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


// Напиши скрипт, который для каждого элемента массива `ingredients` создаст
// отдельный `li`, после чего вставит все `li` за одну операцию в список
// `ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.
// const createNewElement = (array) => {
// array.forEach((element) => {

// const newElement = document.createElement('li');
// newElement.textContent = element

// const parentEl = document.querySelector('ul#ingredients')
// parentEl.appendChild(newElement);
// });
// }

// createNewElement(ingredients);

//----2----
const parentEl = document.querySelector('#ingredients');


const createElement = ingredients.map(el => {
  const newEl = document.createElement('li')
  newEl.textContent = el;
  return newEl
} ); 
parentEl.append(...createElement)
