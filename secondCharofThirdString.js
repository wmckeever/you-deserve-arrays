const prompt = require('prompt-sync')({sigint: true});

let array1 = JSON.parse(prompt("Please enter an array: "));

// Prompt the user for an array 
// Log out the second character in the third item in the array. 
// If the third item is not a string, log an error instead

let secondCharacter = array1[2]


if(typeof array1[2] === "string"){ 
  console.log(secondCharacter + "The Second Character of your Third Item is a String! Rejoice!" );
  
}else{
  console.log("Your character is not a string: ERROR!" );
}

