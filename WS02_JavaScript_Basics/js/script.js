// STEP 1: Print text to the browser console is string ""

console.log("Hello, World!");

// STEP 2: Variables

// Store text values in variables

let userName = "Rasmus";
let age = 26;
const favoriteAnimal = "Maisa koira";


// Print the variables to the console

console.log("My name is " + userName);
console.log("My favorite animal is " + favoriteAnimal);
// STEP 3: User interaction
// Display a pop-up message

alert("Tervetuloa nettisivulle!");

// Ask the user for their name

const visitorName = prompt("Mikä on nimesi?");

// Print the user's answer

console.log(visitorName);
console.log(age);

console.log("Terve " + visitorName + "! Tervetuloa javasciptin pariin!");
// Ask the user for their favorite animal

const visitorFavoriteAnimal = prompt("Mikä on lempieläimesi?");

console.log("Hello, " + visitorName + "!");

if (visitorFavoriteAnimal === "Blue Elephant") {
  console.log("Great choice! That's my favorite animal too!");
} else {
  console.log("Nice! Your favorite animal is " + visitorFavoriteAnimal + ".");
}

// Create a sentence using both answers (check above)

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

const vAge = prompt("How old are you?");

if (vAge < 18) {
  console.log("You are under 18.");
} else {
  console.log("You are an adult.");
}

const messageButton = document.getElementById("messageButton");

messageButton.addEventListener("click", function () {
  alert("JavaScript works!");
});