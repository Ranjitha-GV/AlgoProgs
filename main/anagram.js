var readline = require('readline');
var utility =require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function anagram()
{ 
    read.question("Enter a string to check anagram: ", function(userInput)
    {
        read.question("Enter another string to check for anagram: ", function(userInput1)
        {
        utility.anagram(userInput,userInput1);
           read.close();
    });
  });
}

anagram();