var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js');


function toBinary()
{
    
    var number = prompt("Enter a decimal number to convert to binary: ");
    utility.toBinary(number);
    
}

toBinary();