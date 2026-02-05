
function isFibonacci(arr) {

  if (arr.length < 3) {
    return "Không phải dãy số fibonacci";
  }
  
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + arr[i - 2]) {
      return "Không phải dãy số fibonacci";
    }
  }
  
  return "Là dãy số fibonacci";
}

console.log("=== Test Case 1 ===");
const n1 = 7;
const arr1 = [0, 1, 1, 2, 3, 5, 8];
console.log("n =", n1);
console.log("Mảng:", arr1);
console.log("Kết quả:", isFibonacci(arr1));
console.log();

console.log("=== Test Case 2 ===");
const n2 = 5;
const arr2 = [1, 2, 3, 4, 5];
console.log("n =", n2);
console.log("Mảng:", arr2);
console.log("Kết quả:", isFibonacci(arr2));
console.log();

console.log("=== Test Case 3 ===");
const n3 = 0;
const arr3 = [];
console.log("n =", n3);
console.log("Mảng:", arr3);
console.log("Kết quả:", isFibonacci(arr3));
console.log();

console.log("=== Test Case 4 ===");
const n4 = -1;
if (n4 < 0) {
  console.log("n =", n4);
  console.log("Kết quả: Số lượng phần tử không được nhỏ hơn 0");
} else {
  const arr4 = [];
  console.log("n =", n4);
  console.log("Mảng:", arr4);
  console.log("Kết quả:", isFibonacci(arr4));
}
console.log();

console.log("=== Test Case Bổ Sung ===");
const arr5 = [1, 1, 2, 3, 5, 8, 13];
console.log("Mảng:", arr5);
console.log("Kết quả:", isFibonacci(arr5));
