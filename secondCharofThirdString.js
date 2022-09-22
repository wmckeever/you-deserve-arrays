const prompt = require('prompt-sync')({sigint: true});

let array1 = JSON.parse(prompt("Please enter an array: "));

// let charDisplay = (array1[2],[2])
// This is where my issue is. It's not pulling the right characters.

if(array1[2][3] !== typeof "string"){ 
  console.log("Your character is not a string: ERROR!")
}else{
  console.log(array1[2][3]);
}
