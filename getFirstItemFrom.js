const prompt = require('prompt-sync')({sigint: true});

// 1. Write a program, `getFirstItemFrom.js` that prompts the user for an array, then logs out the first item in that array

// Prompts the user to give us an array
let array1 = JSON.parse(prompt("Please input an array of strings or numbers: "))

let getFirstItem = array1[0];
// Prints out the first item in that array
console.log(getFirstItem);

