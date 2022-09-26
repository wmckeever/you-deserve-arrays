const prompt = require('prompt-sync')({sigint: true});

let array1 = JSON.parse(prompt("Please enter an array: "));

// Prompt the user for an array 
// Log out the second character in the third item in the array. 
// If the third item is not a string, log an error instead

let seconCharacter = array1[2];

if(seconCharacter === typeof "string"){ 
  console.log(seconCharacter + "The Second Character of your Third Item is a String! Rejoice!" );
  
}else{
  console.log("Your character is not a string: ERROR!" );
}


//let str = 'Somewhere at the bottom of the river';

// let firstCharOfStr = str[0];
// console.log(str[0]);
// console.log(firstCharOfStr);

// console.log(str[8]);
// console.log(str[9]); //prints out a space
// console.log(str[10]);


// //substring
// console.log(str.substring(0, 9)); // How you would print out the word itself. 
// console.log(str[0,9]); // Not the same as above and will fail.

// When working with strings and using [] we are working with characters and not whole words.
