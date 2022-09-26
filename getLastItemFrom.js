const prompt = require('prompt-sync')({sigint: true});

// Prompts user to enter an array

let lastItem  = JSON.parse(prompt("Please enter an array to see what the last item is: "));

let lastItemCount = lastItem[lastItem.length -1]; // Tells the Array that you want the last item in the array

console.log(lastItemCount) //Prints out the last item in the array


