let counterValue = 0

const displayCounter = document.querySelector('#value')
const buttonMinus = document.querySelector('button[data-action="decrement"]')
const buttonPlus = document.querySelector('button[data-action="increment"]')

buttonMinus.addEventListener('click', () => {
	counterValue -= 1;
	displayCounter.textContent = counterValue
})

buttonPlus.addEventListener('click', () => {
	counterValue += 1;
	displayCounter.textContent = counterValue
})





