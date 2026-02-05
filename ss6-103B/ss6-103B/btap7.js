
function findSecondLargest(arr) {

  if (arr.length === 0) {
    return "Mảng không có phần tử nào";
  }
  
  if (arr.length === 1) {
    return "Mảng không có số lớn thứ hai";
  }
  
  const uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
  
  if (uniqueArr.length === 1) {
    return "Mảng không có số lớn thứ hai";
  }
  
  return uniqueArr[1];
}

console.log("=== Test Case 1 ===");
const n1 = 6;
const arr1 = [2, 4, 6, 1, 8, 9];
console.log("n =", n1);
console.log("Mảng:", arr1);
console.log("Kết quả:", findSecondLargest(arr1));
console.log();

console.log("=== Test Case 2 ===");
const n2 = 0;
const arr2 = [];
console.log("n =", n2);
console.log("Mảng:", arr2);
console.log("Kết quả:", findSecondLargest(arr2));
console.log();

console.log("=== Test Case 3 ===");
const n3 = -1;
if (n3 < 0) {
  console.log("n =", n3);
  console.log("Kết quả: Số lượng phần tử không được nhỏ hơn 0");
} else {
  const arr3 = [];
  console.log("n =", n3);
  console.log("Mảng:", arr3);
  console.log("Kết quả:", findSecondLargest(arr3));
}
console.log();

console.log("=== Test Case Bổ Sung ===");
const arr4 = [5, 5, 5, 5];
console.log("Mảng:", arr4);
console.log("Kết quả:", findSecondLargest(arr4));
