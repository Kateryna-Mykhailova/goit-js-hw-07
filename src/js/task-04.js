// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



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
btnIncrement: document.querySelector('[data-action="increment"]'),
btnDecrement: document.querySelector('[data-action="decrement"]'),

}

// const counter = document.querySelector('#counter button.')


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