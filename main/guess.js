var prompt = require('prompt-sync')()
var utility = require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js')

 function questionNumber()
 {     var number = prompt('Enter the number : ')
     utility.questionNumber(number)
 }
 questionNumber()