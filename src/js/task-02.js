const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const selectIngredients = document.querySelector('#ingredients');
const addClass = selectIngredients.classList.add('item');
for(let i = 0; i<ingredients.length; i+=1){
const addItem = document.createElement('li');
addItem.textContent=ingredients[i];
selectIngredients.append(addItem);
}
console.log(selectIngredients);