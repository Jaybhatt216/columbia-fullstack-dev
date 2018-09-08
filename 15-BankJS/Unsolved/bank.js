/*const fs = require("fs");

var action = process.argv[2];
var value = process.argv[3];

switch (action) {
    case total:
        total()//add all the transaction
        break;
    case Deposit:
        Deposit()//add a positive transaction
        break;
    case 'Withdraw':
        Withdraw()//add a negative transactions
        break;

}


//you must have atleast 1 argument 
if(process.argv.length < 3){
    console.warn('USAGE: "node bank.js <action> [<amount>]"');
    console.warn('AVAILABLE ACTIONS\nWithdraw <amount>\ndeposit<amount>\ntotal\nlotto')
}
//get the amount line argument
//var action = process.argv[2];



//a negative transaction
function Withdraw(){
    fs.appendFile('bank.txt',',-'+value, (err)=>{
        if(err){
            console.log(err);
            
        }
        console.log("withdrew"+value+'.');

     
   
});
function total(){
    fs.appendFile('bank.txt',+value, (err)=>{
        if(err){
            console.log(err);
            
        }
        console.log("your total is "+value+'.');

     
   
});
function Deposit(){
    fs.appendFile('bank.txt',',+'+value, (err)=>{
        if(err){
            console.log(err);
            
        }
        console.log("Deposit"+value+'.');

     
   
});


//a random number 1 to 6 that has negative or positive tansactions 
//function lotto(){

}*/

var fs = require('fs');

// Enforce that the program must have at least 1 argument passed
if (process.argv.length < 3) {
    console.warn('USAGE: `node bank.js <action> [<amount>]`');
    console.warn('AVAILABLE ACTIONS\nwithdraw <amount>\ndeposit <amount>\ntotal\nlotto');
}

// Get the command line arguments
var action = process.argv[2];
var amount = parseFloat(process.argv[3]);
var transactionLog = 'bank.txt';

// Direct program flow based on action
//
// "Program flow" refers to moving to different parts of the code,
// based on some logical condition
// Basically a fancy term for "if" statements
switch (action) {
    case 'withdraw':
        addTransaction(-1 * amount);
        break;
    case 'deposit':
        addTransaction(amount);
        break;
    case 'total':
        total();
        break;
    case 'lotto':
        lotto();
        break;
    default:
        console.error('Unrecognized action');
        return;
}

function addTransaction(amount) {
    fs.appendFile(transactionLog, ', ' + amount, function(error) {
        if (error) {
            console.error(error);
        }    
    });
    total();
}

// Combine all of the transactions into a single (scalar) value
function total() {
    fs.readFile(transactionLog, 'utf8', function(error, data) {
        var dataArr = data.split(',');
        var total = 0;
        for (var i = 0; i < dataArr.length; i++) {
            total += parseFloat(dataArr[i]);
        }

        console.log('You have ' + total.toFixed(2) + ' money!');
    });
}

function lotto() {
    var cost = 4000;
    var odds = 1 / 3;

    addTransaction(cost * -1);
    console.log('You just got robbed of 4000 monies');

    if (Math.random() <= odds) {
        addTransaction('1');
        console.log('You win!');
    }

}