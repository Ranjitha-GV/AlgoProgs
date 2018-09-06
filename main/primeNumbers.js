var readline = require('readline');
var utility =require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function primeNumbers()
{ 
    read.question("Enter the starting range of prime numbers: ", function(start)
    {
        read.question("Enter the ending range of prime numbers: ", function(end)
        {
        utility.primeNumbers(start,end);
           read.close();
    });
  });
}

primeNumbers();