function tag(strings, ...values) {
  console.log(strings[0]);
  console.log(strings.raw[0]);
  console.log(values);
  return `${strings} ${values}`;
}
const message = tag`hello my name is\n bob, my age is\n 10`;
console.log(message);
