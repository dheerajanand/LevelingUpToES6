function print(...args) {
  args;
  args = ["<br>", ...args, "<br />"];
  console.log(args.join(" "));
}
print("Hello", "World");

const message = "hello world";
const chars = [...message];
console.log(chars);
///////

function add(a, b) {
  a;
  b;
  return a + b;
}
const arr = [2, 10];
console.log(add(...arr));
//////

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr1);
console.log(arr2);
arr1[0] = 989;
console.log(arr1);
console.log(arr2);
