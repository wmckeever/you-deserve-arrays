const prompt = require('prompt-sync')({sigint: true});


let itemList = JSON.parse(prompt("Please enter a list of items for the array: "));

if (itemList[0] === typeof "symbol"){
    console.log("True >> The first item in your list is a number!");
}else{
    console.log("False >> The first number in your list is not a number. Try again!")
}

// Tried doing the same thing as a while loop but can't figure out why it will only print out false??

// while(itemList[0] !== typeof "symbol"){
    
//     console.log("False >> The first number in your list is not a number.")
//     let itemList = JSON.parse(prompt("Please enter another array >> ")) 

// }
// console.log("True >> The first item in your list is a number!");
