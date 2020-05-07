const arr = [1];
var [amount, b = 1000] = arr;
amount;
b;

const obj = {
  isOn: true,
  amount: 10,
};
var { isOn: isServerOn, amount = 1000 } = obj;
isServerOn;
amount;
