function print() {
  console.log(arguments);
}

print(1, 2, 5, 7, "Here");

//REST Operator
function print2(age, sibling, ...arr) {
  console.log(age);
  console.log(sibling);
  console.log(arr);
}

print2(1, 2, 5, 7, "Here");
