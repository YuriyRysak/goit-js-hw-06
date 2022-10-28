const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('ul');

//  const elements = ingredients.map(ingredient => {
//   const titleEl = document.createElement('li');
//   titleEl.textContent = ingredient;
//   titleEl.classList.add('item');

//   return titleEl;
//  });




// console.log(elements);

// ingredientsEl.append(...elements);

const makeIngredientsEl = ingredients => {
  return ingredients.map(ingredient => {
    const titleEl = document.createElement('li');
    titleEl.textContent = ingredient;
    titleEl.classList.add('item');

    return titleEl;
  });
};



const elements = makeIngredientsEl(ingredients);
ingredientsEl.append(...elements);

console.log(elements);







// Напиши скрипт, который для каждого элемента массива ingredients:

//1 Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//2 Добавит название ингредиента как его текстовое содержимое.
//3 Добавит элементу класс item.
//4 После чего вставит все <li> за одну операцию в список ul#ingredients.