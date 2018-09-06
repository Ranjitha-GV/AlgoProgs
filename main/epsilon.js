var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js');


function epsilon()
{
    var number = prompt("Enter the number to find square root of: ");
    utility.epsilon(number);
}

epsilon();