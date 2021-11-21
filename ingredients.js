const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let arrayLength = ingredients.length;
let i = 0;

// Write a while loop that prints out the contents of ingredients:
while (i < arrayLength){
  console.log(ingredients[i]);
  i++;
}

for(i = 0;  i < arrayLength; i++){
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
let reverseIngredients = ingredients.reverse();
for(i = 0;  i < arrayLength; i++){
  console.log(ingredients[i]);
}