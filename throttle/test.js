var throttle = require('./'); // <- this is the file you make;

var sayHi = function() {
  console.log('hi');
};

var throttled = throttle(sayHi, 100);

throttled();
throttled();
throttled();
throttled();

// there should only be two 'hi' messages on the console
