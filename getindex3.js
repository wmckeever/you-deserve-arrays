const prompt = require('prompt-sync')({sigint: true});


let index = JSON.parse(prompt("Please enter and array to see the item in the third index position: "));



if (index.length < 4){
    console.log(index [index.length-1])
}else{
    console.log(index[3])
}
