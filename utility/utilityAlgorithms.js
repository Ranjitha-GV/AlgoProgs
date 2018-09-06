module.exports = {
    /**
     * @description Anagram Detection
     * @param userInput holds the string entered by the user
     * @param userInput1 holds the string used to compare for anagram detection
     */
    
      anagram: function(userInput,userInput1)
    {
        var string1=userInput, string2=userInput1;
        if(string1.toString().split('').join()>='a' && string1.toString().split('').join()<='z' || string2.toString().split('').join()>='A' && string2.toString().split('').join()<='Z')//check if the given input is a string or not
        {
            if(string1.toLowerCase().split('').sort().join('').trim()===string2.toLowerCase().split('').sort().join('').trim()) //check if the given strings are anagrams or not
            {
                console.log("String is an anagram!!");
            }
            else
            {
                console.log("String is not an anagram!!");
            }

        }
        
        else
            
        {
            console.log("Please enter a valid string!!");

        }
    },
/****************************************************************************************************/
/**
 * @description Take a range of 0 ­ 1000 Numbers and find the Prime numbers
 * @param start holds the starting range of prime numbers the user wants to retrieve
 * @param end holds the ending range of prime numbers the user wants to retrieve
 */

primeNumbers: function(start,end)
    {
        var count,start,end,arr=[];
        if(start>0 && end<=1000) //checking condition if the user input is in the range of 0-1000
     {
         
        for(var i=start;i<=end;i++) //start loop to iterate range of numbers starting from the value given by the user
        {
            count=0;
            var curr=i;
            for(var j=1;j<=curr;j++)
            {
                if(curr%j==0) //checking coondition if the number is a proper divisor of numbers starting from 1
                {
                    count++; //increment the count when the number is properly divisible by any number in the range
                }
            }
            if(count==2) //count will be equal to two if the number is a prime number
        {
            arr.push(curr); //push the prime numbers into an array
            
        }
      } 
      console.log("Prime numbers are:  " +arr);       
    }
    else
    {
        console.log("Please enter a value between 0-1000");
    }
  },
        
/***************************************************************************************************/
/**
 * @description Prime numbers that are Anagram and Palindrome
 * @param start holds the starting range of generating palindrome numbers
 * @param end holds the ending range of generating palindrome numbers
 */ 

primePalindrome: function(start,end)
    {
            var count,start,end,arr=[],s1=[],s2=[]; 

            if(start>0 && end<=1000) // checks for the range of numbers to be in between 0-1000
         {
             
            for(var i=start;i<=end;i++) //starts looping from the starting range of numbers given by the user
            {
                count=0;
                var curr=i;
                for(var j=1;j<=curr;j++) //looping condition to check for proper division of numbers
                {
                    if(curr%j==0)
                    {
                        count++; //increament count if the number is properly divisible
                    }
                }
                if(count==2) //count will be equal to two if the number is a prime number
            {
                arr.push(curr); //push the prime numbers into an array
                
            }
          } 
          console.log("Prime numbers are:  " +arr);  
          s1=palindrome(arr); //call palindrome function to apply on prime number array
          console.log("The palindromes are: "+s1)
          anagram(arr); //call anagram function to apply on palindrome number array 
          //console.log("Prime palindrome anagrams are: "+s2);
        }
        else
        {
            console.log("Please enter a value between 0-1000");
        }
        /**
         * @description function to determine palindrome numbers
         * @param arr holds the array of prime numbers
         */
        
    function palindrome(arr) 
    {
        var array=[]
        
        for(var i=0;i<arr.length;i++) //loop to traverse the entire array
        {
            var m1=''+parseInt(arr[i]); //convert the array element into integer element
           if(m1===m1.split("").reverse().join("")) // reverse the given string and compare it with the original string
           {
               array.push(m1); //push the palindrome numbers into a different array
           }
           
        }
        return array; // returns the array consisting of prime palindromes
    }
         /**
         * @description function to determine anagram numbers
         * @param arr holds the array of prime palindrome numbers
         */

    function anagram(arr)
    {
  
    for(var i = 0; i <= arr.length; i++)
    {
        for(var j =i+1; j <= arr.length; j++)
        {
            var arr1=[];
            var s1 = "" + parseInt(arr[i]); 
            var s2 = "" + parseInt(arr[j]);
            s1 = s1.split('').sort();       
            s2 = s2.split('').sort();     //parse each element and sort in ascending order  
            if(s1.join() === s2.join())  //joins the specified path string segments 
            {
                console.log("The two anagrams are : " + arr[i] + " , " + arr[j]);
                arr1.push(arr[i]); // stores the result in array arr1
                
            }
        }
    }
}

},
/***************************************************************************************************/
         /**
         * @description Binary search
         * @param arr holds the array strings to be passed to binary search
         */
    binarySearch: function(arr)
    {
        var prompt = require('prompt-sync')(); 
        var mid,key = prompt("Enter the key to search: ");
        arr.sort(); //sort the array
        var low=0,high=arr.length-1;
        var mid= Math.floor((low+high)/2); // calculate the mid element
        if(key==arr[mid]) //check if mid element is equal to the search element
        {
            console.log("Element found!!!!");
            return true;
        }
        if(key<arr[mid]) //check if the key element is less than the middle element
        {
            for(var i=low;i<=mid;i++) 
            {
                if(arr[i]==key) //check every element to find the search string
                var flag=1;
                break;
            }
            if(flag==1) //check if the element is present or not 
                {
                    console.log("Element found!!!!!");
                }
                else
                {
                    console.log("Element not found :(");
                }
            }
        else
        {
            for(var j=mid+1;j<=high;j++) 
            {
                if(arr[j]==key)
                var flag=1;
                break;
            }
                if(flag==1)
                {
                    console.log("Element found!!!!!");
                }
                else
                {
                    console.log("Element not found :(")
                }
            }
        },
         /**
         * @description Insertion sort
         * @param arr holds the array strings to be passed to insertion sort
         */

        insertionSort:function(userInput,arr)
        {
         if(arr.toString().split('').join()>='0' && arr.toString().split('').join()<='9') //check if the given elements are numbers
            {
            var n=userInput;
          for (i = 1 ; i <= n - 1; i++) {
            var k = i;
            while ( k > 0 && arr[k-1] > arr[k]) { //check if the element is the first element and check if the current element is lesser than the previous element
              var temp = parseInt(arr[k]);
              arr[k]   = parseInt(arr[k-1]);
              arr[k-1] = temp;// swap the elements if condition satisfies
              k--;
            }
          }
         
         console.log("The sorted array is: "+arr);
          return 0;
        }
        else
        {
            console.log("Please enter a Integer value!!");
        }
    },

        /**
         * @description Bubble sort
         * @param arr holds the array strings to be passed to bubble sort
         * @param userInput holds the length of array passed by the user
         */
            
        bubbleSort: function(userInput,arr)
        {
         if(arr.toString().split('').join()>='0' && arr.toString().split('').join()<='9')// check if the input is a number
            {
         var i,j;
         for(i=0;i<userInput;i++)
         {
             for(j=i+1;j<userInput;j++)
             {
                 if(arr[i]>arr[j]) 
               {
                var temp;
                temp=parseInt(arr[i]);
                arr[i]=parseInt(arr[j]);
                arr[j]=temp; //swap elements if the condition satisfies
               }
             }
         } 
         console.log("The sorted array is: "+arr);
        }
        else
        {
            console.log("Please enter a Integer value!!");
        }
    },
         /**
         * @description Bubble sort for strings
         * @param arr holds the array strings to be passed to bubble sort
         * @param userInput holds the length of array passed by the user
         */

     bubbleSortString:function(userInput,arr)
     {
        if(arr.toString().split('').join()>='a' && arr.toString().split('').join()<='z' || arr.toString().split('').join()>='A' && arr.toString().split('').join()<='Z')// check if the input is a string
        {
          var i,j;
          for(i=0;i<userInput;i++)
         {
             for(j=i+1;j<userInput;j++)
             {
                 if(arr[i]>arr[j])
               {
                var temp;
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp; //swap elements if the condition satisfies
               }
             }
         }
         console.log("The sorted array is: "+arr);
        } 
        else
        {
            console.log("Please enter a string!!");
        }
         
     },
         /**
         * @description Insertion sort for strings
         * @param arr holds the array strings to be passed to insertion sort
         * @param userInput holds the length of array passed by the user
         */

     insertionSortString: function(userInput,arr)
     {
        if(arr.toString().split('').join()>='a' && arr.toString().split('').join()<='z' || arr.toString().split('').join()>='A' && arr.toString().split('').join()<='Z')//checks if the element is a string
        {
         var n=userInput;
          for (i = 1 ; i <= n - 1; i++) {
            var k = i;
            while ( k > 0 && arr[k-1] > arr[k]) { //check if the element is the first element and check if the current element is lesser than the previous element
              var temp = arr[k];
              arr[k]   = arr[k-1];
              arr[k-1] = temp;//swap elements if the condition satisfies
              k--;
            }
          }
          console.log("The sorted array is: "+arr);
          return 0;
        }
        else
        {
            console.log("Please enter a string!!");
        }
     },
     getCurrentTime: function()//function to find current time of the system
    {
        var date = new Date();//creating a date object 
        var n = date.getTime();//getTime function to get the current time of the system
        return n; 
    },
            /**
            * @description ellapse
            * @param startTime holds the start time of the stop watch
            */
    ellapse: function(startTime,endTime)
    {
        var ellapse = (endTime-startTime)/1000;//calculating the difference between start time and end time 
        return ellapse;
    },

/********************************************************************************************************************/
         /**
         * @description Binary search for strings
         * @param arr holds the array strings to be passed to binary search
         * @param string holds the key to search
         */
    binaryWord: function(arr,string)
        {
            var mid,flag;
            var low=0,high=arr.length-1;
            console.log(arr.length);
            arr.sort();
            console.log(arr);
            
            var mid= Math.floor((low+high)/2);
            if(string==arr[mid])
            {
                console.log("Element found!!!!");
                return true;
            }
            if(string<arr[mid])
            {
                for(var i=low;i<mid;i++)
                {
                    if(arr[i]==string)
                    {
                    flag=1;
                    break;
                    }
                }
              if(flag==1)
                    {
                        console.log("Element found!!!!!");
                    }
                    else
                    {
                        console.log("Element not found");
                    }
                }
            else
            {
                for(var j=mid;j<=high+1;j++)
                {
                    if(arr[j]==string)
                    {
                    flag=1;
                    break;
                    }
                }
                    if(flag==1)
                    {
                        console.log("Element found!!!!!");
                    }
                    else
                    {
                        console.log("Element not found")
                    }
                }     
        },
/***************************************************************************************************************/
         /**
         * @description Insertion sort for strings
         * @param arr holds the array strings to be passed to insertion sort
         */
        insertionWord(arr)
        {
         if(arr.toString().split('').join()>='a' && arr.toString().split('').join()<='z' || arr.toString().split('').join()>='A' && arr.toString().split('').join()<='Z')//checks if the entered input is a string 
            {
            n = arr.length;
            for (i = 1 ; i <= n - 1; i++) {
            var k = i;
            while ( k > 0 && arr[k-1] > arr[k])  //check if the element is the first element and check if the current element is lesser than the previous element
            {
              var temp = arr[k];
              arr[k]   = arr[k-1];
              arr[k-1] = temp;// swap elements if condition satisfies
              k--;
            }
          console.log("The sorted array is: "+arr);
          return 0;
        }
      }
      else
        {
            console.log("Please enter a string!!");
        }
    },
/**********************************************************************************************************************/
         /**
         * @description Bubble sort for strings
         * @param arr holds the array strings to be passed to bubble sort
         */
    bubbleWord:function(arr)
    {
     if(arr.toString().split('').join()>='a' && arr.toString().split('').join()<='z' || arr.toString().split('').join()>='A' && arr.toString().split('').join()<='Z') //checks if the entered input is a string
        {
          var i,j,n=arr.length;
          for(i=0;i<n;i++)
         {
             for(j=i+1;j<n;j++)
             {
                 if(arr[i]>arr[j])
               {
                var temp;
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
               }
             }
         }
         console.log("The sorted array is: "+arr);  
        } 
        else
        {
            console.log("Please enter a string!!");
        }
    },
/*****************************************************************************************************/
         /**
         * @description Program to convert celcius to farhenheit and vice versa
         */
    celciusToFar: function()
    {
        var prompt = require('prompt-sync')();
        var celTemperature = prompt("Enter the temperature in Celcius:  ");
        var farTemperature = (celTemperature * (9/5))+32; //formula to convert celcius to farhenheit
        console.log("The temperature in Farhenheit is: "+farTemperature);
    },

    farhenheitToCel: function()
    {
        var prompt = require('prompt-sync')();
        var farTemperature = prompt("Enter the temperature in Farhenheit:  ");
        var celTemperature = (farTemperature - 32)*(5/9);// formula to convert farhenheit to celcius
        console.log("The temperature in Celcius is: "+celTemperature);
    },
/*********************************************************************************************************************/
         /**
         * @description Function to calculate monthly loan payment
         * @param principle holds the principle amount
         * @param percent holds the percentage of rate of interest
         * @param years holds the number of years to repay the loan 
         */
   payment: function(principle,percent,years)
   {
       var payment,r,n;
       r = percent/(12*100);
       n = 12*years;
       payment = ((principle*r)/(1-Math.pow((1+r),(-n))));// formula to calculate payment
       console.log("The monthly payment is: "+payment);
   },
/*********************************************************************************************************************/
         /**
         * @description Calculate the epsilon number
         * @param number holds the input to calculate epsilon number
         */
   epsilon: function(number)
   {
    var t = number;
    var eps = 1e-15;
       if(number>=0 && (!NaN))
       {
       while(Math.abs(t-(number/t)) > (eps*t))
       {
        t = ((number/t)+t)/2.0;
       }
       console.log("The square root of "+number+" is "+t);
    }
    else
    {
        console.log("Please enter a number!!");
    }
   },
/*****************************************************************************************************************/
         /**
         * @description Convert number to binary
         * @param number holds the number to be converted to binary
         */ 
    toBinary: function(number)
    {
        var i,arr=new Array(4);
        arr.push();
        if(number>0)
        {
       for(i=0;number>0;i++)
        {
           arr[i]=Math.floor(number%2); // find out if the number holds a reminder when divided by two and store it in an array
           number = Math.floor(number/2); //update the value of number for the next iteration
        }
     console.log(String(arr.reverse()).replace(/\,/g," ")); //reverse the array and print the output
    }
    else
    {
        console.log("Please enter a positive number!!");
    }
},
/****************************************************************************************************************/
         /**
         * @description Determine the nibble of the number
         * @param number holds the number to be converted to its nibble
         */ 

swapNibble:function(number)
 {
    /*var temp1, temp2;
    var flag=0;
         temp1 = number & 00001111; 
         temp2 = number & 11110000;
         temp1=temp1 << 4;//left shift the bits by 4 to move the first set of nibbles 
         temp2=temp2 >> 4;//right shift the bits by 4 to move the second set of nibbles
         console.log(temp1)
         var temp=(temp2|temp1); //adding the above bits to apply the swap 
         console.log(temp)
        
         for(i=temp;i>=0;i--)
         {
             if(temp==Math.pow(2,i)) //check if the result is a power of two
             {
                 flag=1;
                 break;
             }

         }
         if(flag==1)//check if the condition for power of two satisfies
         console.log('2 power of '+i)
         else
         console.log('number is not a power of 2') */

        var a, sum=0;
        var arr=[], arr1=[];
        while(number>0)
        {
            a=((number%2));
            arr.unshift(a);
            number=(Math.floor(number/2));
        }
        var t=(Number(arr.length));
        for(var i=0; i<(8-t); i++)
        {
            arr.unshift(0);     //making it a complete 8-bits binary
        }
        str=arr.toString();     //converting array to string
        arr1=[];
        arr1=str.split(',');
        
        var m=parseInt(Math.floor(arr1.length/2));  //dividing the binary array into two nibbles
        var mid1=[], mid2=[];
        mid1.length=m;      //creating an array of mid-length of the original array
        mid2.length=parseInt(arr1.length-m);    //creating an array of mid-length of the original array
        for(var i=0; i<m; i++)  
        {
            mid1.push(arr1[i]);     //pushing half of the elements to mid1
        }
        for(var j=m; j<arr1.length; j++)
        {
            mid2.push(arr1[j]);     //pushing other half elements to mid2
        }
        str1=mid1.join('');     //converting mid1 array to string str1
        str2=mid2.join('');     //converting mid2 array to string str2
        var mid3=[], mid4=[];
        mid3.push(str1);        //pushing str1 to mid3 array 
        console.log("Nibble 1 is: "+mid3);
        mid4.push(str2);        //pushing str2 to mid4 array
        console.log("Nibble 2 is: "+mid4);
        for(var c=0; c<mid3.length; c++)       
        {
            for(d=0;d<mid4.length;d++)
            {
            /**
             * @description swapping both the mid3 and mid4 elements
             */
            var temp=mid3[c];
            mid3[c]=mid4[d];
            mid4[d]=temp;
            }
        }
        var string=mid3+mid4;   //concatinating mid3 and mid4
        console.log("Binary value after swapping the nibbles= "+ string);
        array1=string.split('');
        
        
            var count=0;
            for(var i=array1.length-1; i>=0; i--)
            {
                sum=sum+(array1[i]*(Math.pow(2,(count))));
                count++;
            }
            console.log("Decimal value of the binary after swapping the nibbles= "+sum);
            this.isPower(sum);
    },
    
    isPower: function(val)  //function to check whether the number obtained is a power of 2
    {
        var temp=val;
        var count=0;
        if(val%2==0)
        {
            while(val%2==0)
            {
                count++;
                val/=2;
            }
            if(val==1)
            {
                console.log('\nThe number is a power of 2: 2^ '+count+"= "+temp);
            }
            else{
                console.log("The number is not a power of 2");
            }
        }
        else
        {
            console.log("it is not a power of 2");
        }

        /*power: function(val)
    {
        var a=1;
        for(var i=0; i<val; i++)
        {
            a=a*2;
        }
        return a;
    },*/

 },
 /****************************************************************************************************************/
         /**
         * @description Find the day when date, year and month is given
         * @param date holds the date
         * @param month holds the month 
         * @param year holds the year
         */ 
 findDay: function(date,month,year)
 {
     
    {
        var d,m,y,x;
        var n=Math.floor((14-month)/12);
        n=parseInt(n);
        y=year-n;
        y=parseInt(y);
        x = y + Math.floor(y/4)-Math.floor(y/100) +Math.floor(y/400);//fomula  to caculate day
        x=parseInt(x);
        m = ((month +( 12 *n))-2);
        m =parseInt(m);
        d= (date+x+Math.floor((31*m)/12))%7;
        d=parseInt(d);


        switch(d) //switch to print days
        {
            case 0 : console.log("The day is Sunday");
            break;

            case 1 : console.log('The day is Monday');
            break;

            case 2 : console.log('The day is Tuesday');
            break;

            case 3 : console.log('The day is Wednesday');
            break;

            case 4 : console.log('The day is Thursday');
            break;

            case 5 : console.log('The day is Friday');
            break;

            case 6 : console.log('The day is Saturday');
            break;
        }
    }
},
 /****************************************************************************************************************/
         /**
         * @description Vending machine
         * @param amount holds the amount to provide change
         */ 
 vendingMach:function(amount)
 {
         /**
         * @param amount holds the change to return
         */
        var count =0;
        choice = 1;
        var arr=[1000,500,100,50,10,5,2,1];
        for(i=0;i<arr.length;i++)
        {
         if(amount/arr[i]>=1)//case1 to print 1000 notes
            {
                    var result = Math.floor(amount/arr[i]);
                    console.log("Number of "+arr[i]+" rs note are : " +result);
                    amount = amount -result*arr[i];
                    count = count + result;

        }
    }
    if(amount>0)
        this.vendingMach(amount);
 },

/*************************************************************************************************/
         /**
         * @description Guess the number
         * @param number holds the number to give a range in between which the player needs to choose a number
         */ 
questionNumber : function(number)
    {
         /**
         * @param n holds the highest number in the range
         * @param low holds the first number in the range 
         * @param high holds the last number in the range
         */ 
        var prompt =require('prompt-sync')()
        var n = Math.pow(2,number)
        console.log('Think of a number between 0 and ' + n )
        var low = 0;
        var high = n;
        var unknown = this.askQuestion(low,high) //call the function askQuestion
        console.log('Your number is '+unknown)
    },
        
    askQuestion : function(low ,high)
    {
        var prompt =require('prompt-sync')()
        if ((high - low) == 1) 
        return low;
        else
        var mid =(low + high)/ 2;
        console.log("Is it less than  " , +mid)
        var choice = prompt('Enter the choice in 1 or 0 : ')
        if(choice == 1)
        {
        return this.askQuestion(low,mid) //return the updated low and high values
        }
        else if(choice == 0 )
        {
        return this.askQuestion(mid,high) //return the updated low and high values
    }
    else
    {
        console.log('Not valid')
    }
},

/****************************************************************************************************/
         /**
         * @description Merge sort
         * @param arr holds the array to be sorted
         */ 
merge : function(arr)
    {
            this.mergeSort((arr));
            arr.forEach(element =>
                {
            
                    console.log(parseInt(element));
                });
    },  
    mergeSort : function(arr)
    {
        if(arr.length==1)
        {
            return; 
        }
        var m=Math.floor(arr.length/2); //divide the  array into two
        var a1=new Array(m);
        var a2=new Array(arr.length-m);
        var i;
        for(i=0;i<a1.length;i++)
        {
            a1[i]=parseInt(arr[i]); //save all the elements of first division of the array into a1 
            
        }
        for(var j=0;j<a2.length;j++,i++)
        {
            a2[j]=parseInt(arr[i]); //save all the elements of the second division of the array into a2
            
        }
        this.mergeSort(a1); //recursively call mergeSortto further divide the array 
        this.mergeSort(a2); //recursively call mergeSort to further divide the array
        this.merger(a1,a2,arr); 
    },
    merger : function(a,b,c)
    {
        var i=0,j=0,k=0;
        while(i<a.length && j<b.length) //compare elements of each array 
        {
            if(a[i]<b[j]) //compare each element of a1 which each element of a2
            {
                c[k]=parseInt(a[i]);
                i++;
                k++;
            }
            else
            {
                c[k]=parseInt(b[j]);
                k++;
                j++;
            }
        }
        while(i<a.length) //check for left over elements in a1
        {
            c[k]=parseInt(a[i]);
            k++;
            i++;
        }
        while(j<b.length) //check for left over elements in a2
        {
            c[k]=parseInt(b[j]);
            k++;
            j++;
        }
    },
}
/****************************************************************************************************/



