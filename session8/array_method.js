const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < number.lengt; index++) {
  console.log(number[i]);
}

// forEach
number.forEach((number, index, array) => {
  console.log(number, index, array);
});

// filter
const newNumber = number.filter((element) => {
  return element % 2 === 0;
});

console.log(newNumber);

// map : sử dụng để duyệt qua các phần tử của mảng; trả về 1 mảng mới có số lượng phần tử "bằng với " số lượng phần tử của mảng mới
const mapNumber = number.map((element) => {
  return ` Số thứ tự ${element}`;
});
console.log(mapNumber);

// every
const scores = [8, 9, 10, 8, 8];
const relsultCheck = scores.every((element) => {
  return element >= 8;
});

console.log(relsultCheck);

// reduce
let total = 0;
for (let index = 0; number < array.length; index++) {
  total += number[index];
}

console.log(total);

const newTotal = number.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0);
console.log(total);
