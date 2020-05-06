console.log(Math.max(1, 2, 3, 9));
console.log(Math.min(1, 2, 3, 9));

const numbers = [1, 5, 3, 9];
function getMax(arr) {
  let max = -Infinity;
  arr.forEach(number => {
    max = Math.max(max, number);
  });
  return max;
}

const max = getMax(numbers);
max;
