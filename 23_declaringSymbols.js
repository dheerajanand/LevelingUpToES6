const symbolA = Symbol("iteration");
const symbolB = Symbol("iteration");

symbolA;
symbolB;

console.log(symbolA === symbolB);

const symbol = Symbol();
symbol;

const obj = { [symbol]: "hello world" };
obj;
console.log(Object.getOwnPropertyNames(obj));
console.log(JSON.stringify(obj));
console.log(Object.keys(obj));

console.log(Object.getOwnPropertySymbols(obj));
const firstSymbol = Object.getOwnPropertySymbols(obj)[0];
console.log(symbol === firstSymbol);
