// Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
//     input), подставляет его текущее значение в `span#name-output`. Если инпут
//     пустой, в спане должна отображаться строка `'незнакомец'`.

    const refs = {
        input: document.querySelector('input#name-input'),
        titleText: document.querySelector('span#name-output')
    };

    refs.input.addEventListener('input', onInputChange)

    function onInputChange (event) {
    refs.titleText.textContent = event.currentTarget.value ? event.currentTarget.value : 'незнакомец'

    };
