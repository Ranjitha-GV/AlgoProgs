var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js');

function temperature()
{ 
    console.log("1: Conversion from Celcius to Farhenheit");
    console.log("2: Conversion from Farhenheit to Celcius");
    var choice = prompt("Please enter your choice: ")
   
    switch(parseInt(choice))
    {
        case 1:
        utility.celciusToFar();
        break;

        case 2:
        utility.farhenheitToCel();
        break;

        default:
        console.log("Please enter a valid choice!!");
        break;

    }
    
}
temperature();