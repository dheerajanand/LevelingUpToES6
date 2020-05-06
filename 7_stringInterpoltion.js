let age = 35;
let name = "Dheeraj";
var message = "My name is " + name + " & age is " + age;
//TEMPLATE LITERAL
var message2 = `My name is ${name} & age is ${age}`;
message;
message2;

const multiLineMsg1 = "My name is\n" + "something\n";
console.log(multiLineMsg1);

//BACK TICK
const multiLineMsg2 = `My name is
something`;
console.log(multiLineMsg2);

const activities = ["running", "playing", "jumping"];
const message3 = `My name is bob and love ${activities.join(", ")}`;
console.log(message3);

const message4 = `My name is bob and love ${activities
  .map(function(activity) {
    return `${activity}!`;
  })
  .join(", ")}`;
console.log(message4);
