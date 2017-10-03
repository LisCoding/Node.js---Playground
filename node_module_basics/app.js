//requiring my_module
// var my_module = require('./my_module');
// my_module.greet();
// my_module.add(10, 2)


// Sometimes, we don't want to export just an object. What if we wanted to return a function that returns an object? Let's switch up our code a little bit:

var my_module = require('./my_module')();     //notice the extra invocation parentheses!
console.log(my_module);
my_module.greet();
my_module.add(5,6);
