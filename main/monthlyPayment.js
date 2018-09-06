var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js');


function payment()
{
    var principle = prompt("Enter the principle amount: ");
    var percent = prompt("Enter the percentage of interest: ");
    var years = prompt("Enter the number of years: ");
    utility.payment(principle,percent,years);
}
payment();