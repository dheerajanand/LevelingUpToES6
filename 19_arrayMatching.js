const numbers = [1, 2, 3, 4];
let [a, b, c, d] = numbers;

// Array Swapping
// [c, d] = [a, b];
a;
b;
c;
d;

function getConfig() {
  return [false, 10, 1, 2, 3, 4, 5];
}

const [isOn, amount, ...rest] = getConfig();
isOn;
amount;
rest;

var isOff = false;
var amt = 10;

// ES5 Method
// function setConfig(config) {
//   isOff = config[0];
//   amt = config[1];
// }

//ES6 mehtod
function setConfig([_isOff, _amt]) {
  isOff = _isOff;
  amt = _amt;
}

setConfig([true, 20]);
isOff;
amt;
