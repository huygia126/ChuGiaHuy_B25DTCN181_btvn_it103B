let number = [1, 2, 3, 4, 5, 6, 7, 8];
let size = 3;

console.log(diveArray(number, size));

let number2 = [1, 2, 3, 4, 5, 6, 7, 8];
let size2 = 4;

console.log(diveArray(number2, size2));

let number3 = "abc";
let size3 = 3;

console.log(diveArray(number3, size3));

function diveArray(arr, n) {
  if (!Array.isArray(arr)) {
    console.error("Tham số đầu vào phải là một mảng");
    return [];
  }
  if (typeof n !== "number" || n <= 0) {
    console.error("Tham số thứ 2 phải là số nguyên dương !");
    return [];
  }
  const result = [];
  for (let i = 0; i < arr.length; i += n) {
    const chunk = arr.slice(i, i + n);
    result.push(chunk);
  }
  return result;
}
