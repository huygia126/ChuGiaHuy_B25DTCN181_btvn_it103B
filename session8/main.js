const sum = (a, b) => {
  return a + b;
};
console.log("sum = ", sum(10, 20));

function greet(name) {
  return `hello ${name}`;
}

function processUseInput(callback) {
  const name = "RE";
  console.log(callback(name));
}

processUseInput(greet);

// hàm trả về một hàm khác
function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}
const double = multiplyBy(2);

console.log(double(5));
