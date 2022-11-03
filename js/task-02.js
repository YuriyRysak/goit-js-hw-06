const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('ul');



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







