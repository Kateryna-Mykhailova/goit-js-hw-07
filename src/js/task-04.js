// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



// let counterValue = 0;
// console.log(counterValue);
// const button = document.querySelector('#counter button'),
// const btnIncrement = button[0];

// console.log(refs.counter);
// console.log(refs.button);
// console.log(btnIncrement);


//const counterValue = refs.counter.textContent;

const counterValue ={
    value: 0,
    increment(){
        this.value += 1;
    },
    decrement(){
        this.value -= 1;
    },
};
const refs =  {
    textValue: document.querySelector('#value'),
btnDecrement: document.querySelector('.btnDecrement'),
//btnDecrement: document.querySelector('div#counter.firstChild'),
// btnDecrement: document.querySelector('#counter button'),
btnIncrement: document.querySelector('.btnIncrement')
}

// const counter = document.querySelector('#counter button.')
// console.log(counter);
// const dfg = counter.querySelector('counter.firstChild')
// console.log(dfg);

// console.log(refs.btnDecrement);
// console.log(refs.btnDecrement[1]);
refs.btnDecrement.addEventListener('click', onBtnDecrementClick)
refs.btnIncrement.addEventListener('click', onBtnIncrementClick)

function onBtnDecrementClick (event){
    
    counterValue.decrement()
    refs.textValue.textContent = counterValue.value
}

function onBtnIncrementClick (event){
    counterValue.increment()
    refs.textValue.textContent = counterValue.value
}