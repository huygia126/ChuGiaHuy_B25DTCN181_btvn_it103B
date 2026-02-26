let number = 2941;
TheBiggestNumber(number);

let number2 = 3875;
TheBiggestNumber(number2);

let number3 = "1h8t";
TheBiggestNumber(number3);

function TheBiggestNumber(num) {
  if (isNaN(num)) {
    console.error("Dữ liệu không phù hợp");
    return null;
  }
  let char = num.toString().split("");
  let numbers = char
    .map(Number)
    .sort((a, b) => b - a)
    .join("");
  console.log(numbers);
}
