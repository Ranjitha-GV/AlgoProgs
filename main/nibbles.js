var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js');


function swapNibble()
{
    
    var number = prompt("Enter a decimal number to find its nibbles: ");
    utility.swapNibble(number);
    
}

swapNibble();