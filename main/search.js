var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/algorithms/utility/utilityAlgorithms.js');

function search()
{ 
                console.log("1: BinarySearch method for Integers and Strings.");
                console.log("2: InsertionSort method for Integers. ");
                console.log("3: InsertionSort method for Strings. ");
                console.log("4: BubbleSort method for Integers. "); 
                console.log("5: BubbleSort method for Strings. ");   


                var choice= prompt("Enter your choice of operation: ");
               
            var userInput= prompt("Enter the number of elements in the array: ");
            var arr = new Array(userInput);
            for(var i=0;i<userInput;i++)
            {
              arr[i] = prompt("Enter the elements for this array: ");
            }

            switch(parseInt(choice))
            {
                case 1:
                   var startTime = utility.getCurrentTime();
                   utility.binarySearch(arr);
                   var endTime = utility.getCurrentTime();
                   var res = utility.ellapse(startTime,endTime);
                   console.log("The start time is "+startTime/1000+" seconds");
                   console.log("The end time is "+endTime/1000+" seconds");
                   console.log("The time taken to search is: "+res+" seconds");
                   break;

                case 2:
                    var startTime = utility.getCurrentTime();
                    utility.insertionSort(userInput,arr);
                    var endTime = utility.getCurrentTime();
                    var res = utility.ellapse(startTime,endTime);
                    console.log("The start time is "+startTime/1000+" seconds");
                    console.log("The end time is "+endTime/1000+" seconds");
                    console.log("The time taken to sort is "+res+" seconds");
                    break;

                case 3:
                    var startTime = utility.getCurrentTime();
                    utility.insertionSortString(userInput,arr);
                    var endTime = utility.getCurrentTime();
                    var res = utility.ellapse(startTime,endTime);
                    console.log("The start time is "+startTime/1000+" seconds");
                    console.log("The end time is "+endTime/1000+" seconds");
                    console.log("The time taken to sort is "+res+" seconds");
                    break;

                case 4:
                    var startTime = utility.getCurrentTime();
                    utility.bubbleSort(userInput,arr);
                    var endTime = utility.getCurrentTime();
                    var res = utility.ellapse(startTime,endTime);
                    console.log("The start time is "+startTime/1000+" seconds");
                    console.log("The end time is "+endTime/1000+" seconds");
                    console.log("The time taken to sort is "+res+" seconds");
                    break;

                case 5:
                    var startTime = utility.getCurrentTime();
                    utility.bubbleSortString(userInput,arr);
                    var endTime = utility.getCurrentTime();
                    var res = utility.ellapse(startTime,endTime);
                    console.log("The start time is "+startTime/1000+" seconds");
                    console.log("The end time is "+endTime/1000+" seconds");
                    console.log("The time taken to sort is "+res+" seconds");
                    break;

                default:
                    console.log("Invalid choice! Please enter a valid option.");
                break;
                   
         } 
 }

search();