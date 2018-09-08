/*
# Multiples 
enter number                                                                                                                                                                                                                                                                                                                                    ## File                                                                                                                                                                                                                                                                                                                                         * *None*                                                                                                                                                                                                                                                                                                                                        ## Instructions                                                                                                                                                                                                                                                                                                                                 * Write a command line node application that takes in a number 
from the command line and finds the sum of all the multiples of
 6 that are smaller than it. (ex: input: 13... output: 6 + 12 = 18)  
*/
let number = process.argv[2];//take in the number we give it

    let results=0;//results will be added to this variable
    number = parseFloat(number);//ensures what we type in is taken as a number so if we did not it would take this as a string
    for(var i=6;i<=number;i+=6){//this is how you would find other multiples, I starts at 6 then I goes up by 6 that makes multiples
        results +=i;//add I to the value to do the math so whatever I is from the loop will be it, so if I input 12 i is 6 and less than 12 then 
                    //increase with 6 to do multiple 
        
    }
    console.log(results);
    
        
    









