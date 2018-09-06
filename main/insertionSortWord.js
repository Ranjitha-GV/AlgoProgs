var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js');


function insertionWord()
{
    var userInput= prompt("Enter the number of elements in the array: ");
            var arr = new Array(userInput);
            for(var i=0;i<userInput;i++)
            {
              arr[i] = prompt("Enter the elements for this array: ");
            }
    utility.insertionWord(arr);
}

insertionWord();