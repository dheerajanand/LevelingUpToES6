const arr1 = [1, 2, 3, 6, 4];
const intoTwo = arr1.map(number => number * 2);
console.log(intoTwo);

//Descending
console.log(arr1.sort((a, b) => b - a));

//Ascending
console.log(arr1.sort((a, b) => a - b));

var obj = {
  value: 0,
  increment: function() {
    var that = this;
    setTimeout(function() {
      that.value++;
      console.log(that.value);
    }, 1000);
  },
  incrementArrow: function() {
    setTimeout(() => {
      this.value++;
      console.log(this.value);
    }, 1000);
  }
};

obj.increment();
obj.incrementArrow();
