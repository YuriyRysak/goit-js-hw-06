// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, 
// в спане должна отображаться строка "Anonymous".

const refs = {
    inputEl:document.querySelector('#name-input'),
    outputEl:document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', event => {
	refs.outputEl.textContent = event.target.value

	if (event.target.value === '') {
		refs.outputEl.textContent = 'Anonymous'
	}
});







