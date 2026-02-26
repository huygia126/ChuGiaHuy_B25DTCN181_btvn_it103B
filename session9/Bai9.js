let number = [5, 8, 6, 3, 4, 2, 7];
let resulytt = reSort(number);
console.log(resulytt);

let number2 = [5, 9, 6, 4, 1, 8, 3];
let result1 = reSort(number2);
console.log(result1);

let number3 = "abc";
let result2 = reSort(number3);
console.log(result2);

function reSort(arr) {
  if (!Array.isArray(arr)) {
    console.error("Mảng không phù hợp !");
    return [];
  }
  const result = arr.filter((value) => value % 2 === 0).sort((a, b) => a - b);
  let size = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = result[size];
      size++;
    }
  }
  return arr;
}
