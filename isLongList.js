const prompt = require('prompt-sync')({sigint: true});

// 4. `isLongList.js`: prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10

let list1 = JSON.parse(prompt("Please enter an array:  ")); 

if (list1.length > 10){
    console.log("Your length is at least 10 >> true")
}else{
    console.log("Your length is not at least 10 >> false");
}




