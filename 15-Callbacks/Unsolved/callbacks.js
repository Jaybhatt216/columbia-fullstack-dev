var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function logs_a_message(str){
    console.log(str);
}
logs_a_message('hello');

// Write a function that runs a function argument if
// its other argument is truthy.
function runs_if_true(bool){
    if(bool === true){
        console.log('I am true');
    }
}
runs_if_true(true);

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function take_a_function(Function,Value){
    return function f_on_v(Value){
        console.log('I ran a function on a value');
    }
}
take_a_function(runs_if_true(true));

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
fs.writeFile('log.txt', 'Hello Node', function (err) {
    if (err) throw err;
    console.log('see log');
  }); // => message.txt erased, contains only 'Hello Node'