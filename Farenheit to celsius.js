// Get Input from User
const farenheit = parseFloat(prompt("Enter temperature in Farenheit: "));

// Calculate Farenheit in Celsius by using the formula
const celsius = (farenheit - 32) * 5/9;

// Display Farenheit in Celsius
console.log(`${farenheit}° Farenheit is equal to ${celsius}° Celsius `);