function getConfig() {
  return {
    isOn: true,
    amount: 10,
    hello: "1234",
    shouldDelete: false,
  };
}

//ES5
// var config = getConfig();
// var isOn = config.isOn;
// var amount = config.amount;

// ES6
var { isOn, hello } = getConfig();
isOn;
hello;

////////////
//ES5

var config = {};
function setConfig(isOn, amount) {
  config.isOn = isOn;
  config.amount = amount;
}
setConfig(true, 10);

// ES6
var configES6 = {};
function setConfigES6({ isOn, amount }) {
  configES6 = { isOn, amount };
}
setConfigES6({
  isOn: false,
  amount: 420,
});
configES6;
