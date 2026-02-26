let number = [1, 2, 3, 5];
console.log(checkIsArithmeticProgression(number));

let number2 = [1, 2, 4, 5];
console.log(checkIsArithmeticProgression(number2));

let number3 = "abc";
console.log(checkIsArithmeticProgression(number3));

function checkIsArithmeticProgression(arr) {
  if (!Array.isArray(arr)) {
    console.error("Mảng không hợp lý !");
    return [];
  }
  let line = "";
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      continue;
    }
    line += `${arr[i] + 1} `;
  }
  return line;
}
