// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



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





// const CounterPlugin = function ({ 
//     rootSelector, 
//     initialValue = 0, 
//     step = 1,
//     } = {}) {
     
//     this._value = initialValue;
//     this._step = step;

//     this._refs = this._getRefs(rootSelector);
//     this._bindEvents();
//     this.updateValueUi();
// };
// CounterPlugin.prototype._getRefs = function ( rootSelector) {
//     const refs = {};
//     refs.container = document.querySelector(rootSelector); 
//     refs.decrementBtn = refs.container.querySelector("[data-action='decrement']");
//     refs.incrementBtn = refs.container.querySelector("[data-action='increment']");
//     refs.value = refs.container.querySelector('#value');
//     console.log(refs.decrementBtn, refs.incrementBtn, refs.value );
  
//     return refs;
// };
// CounterPlugin.prototype._bindEvents = function() {
//     this._refs.incrementBtn.addEventListener('click', () => {

//         console.log("CounterPlugin.prototype._bindEvents -> this", this)
//         this.increment ();
//         this.updateValueUi();
//     });

//     this._refs.decrementBtn.addEventListener('click', () => {
//         console.log("CounterPlugin.prototype._bindEvents -> this", this)
//         this.decrement ();
//         this.updateValueUi();
//     });

// };
// CounterPlugin.prototype.updateValueUi = function () {
//   this._refs.value.textContent = this._value;  
// };

// CounterPlugin.prototype.increment = function () {
//     this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//     this._value -= this._step;
// };

// const counter = new CounterPlugin({rootSelector: '#counter', step: 1});

// console.log(counter);







// const wrap_button = {
//     sub: document.querySelector("[data-action='increment']"),
//     add: document.querySelector("[data-action='decrement']"),
//     span: document.querySelector('#value'),
//     wrapper: document.querySelector('#counter '),
//   };
//   let counterValue = 0;
//   const increment = () => {
//     counterValue += 1;
  
//     document.getElementById('value').textContent = counterValue;
//   };
  
//   const decrement = () => {
//     counterValue -= 1;
  
//     document.getElementById('value').textContent = counterValue;
//   };
//   wrap_button.sub.addEventListener('click', increment);
//   wrap_button.add.addEventListener('click', decrement);