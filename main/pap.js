var readline = require('readline');
var utility =require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function primePalindrome()
{ 
    read.question("Enter the starting range: ", function(start)
    {
        read.question("Enter the ending range: ", function(end)
        {
        utility.primePalindrome(start,end);
           read.close();
    });
  });
}

primePalindrome();