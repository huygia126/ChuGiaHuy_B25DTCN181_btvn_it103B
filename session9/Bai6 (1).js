let number = [2, 4, 6, 8];

console.log(checkIsArithmeticProgression(number));

let number2 = [3, 6, 9, 12, 14];
console.log(checkIsArithmeticProgression(number2));

let number3 = "abc";
console.log(checkIsArithmeticProgression(number3));

function checkIsArithmeticProgression(arr) {
  if (!Array.isArray(arr)) {
    console.error("Mảng bạn nhập không hợp lệ");
    return [];
  }
  let constNumber = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== constNumber) {
      return false;
    }
  }
  return true;
}
