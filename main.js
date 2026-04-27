// Task 1
let drinksList = ["Latte", "Tea", "Espresso"];
let pastryList = ["Croissant", "Muffin", "Bagel"];

// Task 2
console.log("Number of drinks: " + drinksList.length);
console.log("Numer of pastries: " + pastryList.length);

// Task 3
console.log("Latte: " + drinksList[0] + " \nPastry: " + pastryList[0]);

// Task 4
const input = require('readline-sync');
let userChoice = input.question("Enter an index value between 0 and 2:");
console.log("Selected Pastry: " + pastryList[userChoice] + "\nSelected Drink: " + drinksList[userChoice]);

// Task 5
for(let i = 0; i < drinksList.length; i++){
    console.log(drinksList[i]);
}

// Task 6
let drinkOrder = input.question("What drink would you like?: ");
drinksList.push(drinkOrder);

console.log("Number of drinks: " + drinksList.length);

let drinkChoice = input.question("Enter drink choice. Choose number between 0 and " + drinksList.length + ": ")
let pastryChoice = input.question("Enter pastry choice. Choose number between 0 and " + pastryList.length + ": ")

console.log("Selected Order\nDrink Choice: " + drinksList[drinkChoice] + "\nPastry Choice: " + pastryList[pastryChoice]);
