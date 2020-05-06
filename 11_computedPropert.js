var key = "lastName";
var person = {
  fistName: "Dheeraj"
};
person[key] = "Anand";
person;

////////////////////////
function somekey() {
  return "somekeyvalue";
}
var person2 = {
  fistName: "Bob",
  [key]: "The",
  [somekey()]: "Testing",
  ["somestring"]: "value"
};
person2;
