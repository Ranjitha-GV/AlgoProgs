var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js');


function findDay()
{
            var day=''+parseInt();
            var date = prompt("Enter date: ")
            date=parseInt(date);
            var month = prompt("Enter month: ")
            month = parseInt(month);
            var year = prompt("Enter the year: ")
            year=parseInt(year);
  if(year % 4 == 0 && (year % 100 !=0 || year % 400 ==0)) //logic to find leap year
     {
        if (date > 0 && date < 32 && month  <=12)
        {
           utility.findDay(date, month , year);
        }
        else
        {
            console.log("Invalid date");
        }

      }
        else if (date >= 29 && month === 2)
            {
                console.log("Date does not exsit");
            }
            else if (date >= 31 && (month == 4 || month ==6 || month ==9 || month == 11))
            {
                console.log("Invalid date");

            }
            else if(date > 0 && date < 32)
            {
              utility.findDay(date, month , year);
            }
            else
            {
                console.log("Invalid date");
            }
 }    


findDay();