var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js');
var fs=require('fs');
var data=fs.readFileSync('data.txt');
data = data.toString().split(",");


function binaryWord()
{
    var searchString =  prompt("Enter the string to search: ");
    utility.binaryWord(data,searchString);
}

binaryWord();