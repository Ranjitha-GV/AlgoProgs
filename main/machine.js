var readline = require('readline');
var utility =require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js');
var read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function vendingMach()
   {
       read.question("Enter change to be returned: ", function(amount){
           utility.vendingMach(parseInt(amount));
           read.close();
       });
   }
   vendingMach();
