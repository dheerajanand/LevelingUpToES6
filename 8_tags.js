function tag(strings, ...values) {
  let message = "";
  console.log(strings);
  console.log(values);

  strings.forEach((string, index) => {
    message += string;
    if (index < values.length) {
      message += `<b>${values[index]}</b>`;
    }
  });
  return message;
}

const name = "Dheeraj";
const age = 20;
const message = tag`hello my name is ${name} my age is ${age}`;
console.log(message);
