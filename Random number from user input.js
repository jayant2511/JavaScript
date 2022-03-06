// Get input from user
const min = parseInt(prompt("Enter the minimum value: "))
const max = parseInt(prompt("Enter the maximum value: "))

// Generate a random number from user input
const random = Math.floor(Math.random() * (max - min + 1) + min);

//Display the random number from user input
console.log(`Random value between ${min} and ${max} is ${random}`);