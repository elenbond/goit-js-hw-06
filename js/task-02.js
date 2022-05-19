const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients");
const list = ingredients.map(element => {
  const ingredientsListItem = document.createElement("li");
  ingredientsListItem.textContent = element;

  ingredientsListItem.classList.add("item");
  return ingredientsListItem;
});
ingredientsList.append(...list);
console.log(ingredientsList);