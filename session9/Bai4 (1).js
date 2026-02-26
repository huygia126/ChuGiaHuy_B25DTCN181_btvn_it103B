let choose;
let numberList = [];
let hasNumberOnIt = false;
do {
  choose = +prompt(`=== MENU QUẢN LÝ SỐ NGUYÊN ===
1. Nhập danh sách số nguyên.
2. Tính trung bình các số
3. Tìm số chẵn lớn nhất
4. Tìm số lẻ nhỏ nhất
5. Thoát`);
  switch (choose) {
    case 1:
      let count;
      while (true) {
        count = +prompt("Vui lòng nhập số nguyên cần phải nhập");
        if (!validateNumber(count)) {
          continue;
        }
        break;
      }
      addNumberToList(numberList, count);
      hasNumberOnIt = true;
      break;
    case 2:
      if (hasNumberOnIt) {
        alert("Vậy Trung bình các số là :" + averageOfNumbers(numberList));
      } else {
        alert("Bạn phải có số trong mảng trước khi sử dụng chức năng này !");
      }
      break;
    case 3:
      if (hasNumberOnIt) {
        alert(
          "Vậy số chẵn lớn nhất trong mảng là " +
            theBiggestEvenNumber(numberList),
        );
      } else {
        alert("Bạn phải có số trong mảng trước khi sử dụng chức năng này !");
      }
      break;
    case 4:
      if (hasNumberOnIt) {
        alert(
          "Vậy số lẻ thấp nhất trong mảng là " + theLowestOddNumber(numberList),
        );
      } else {
        alert("Bạn phải có số trong mảng trước khi sử dụng chức năng này !");
      }
      break;
    case 5:
      break;
    default:
      alert("Số bạn nhập không phu hợp !");
  }
} while (choose !== 5);

function addNumberToList(arr, n) {
  let nums;
  let curent = n;
  while (n--) {
    while (true) {
      nums = +prompt("Vui lòng nhập số nguyên của bạn");
      if (!validateNumber(nums)) {
        continue;
      }
      break;
    }
    arr.push(nums);
  }
  alert("Đã thêm thành công " + curent + " số nguyên");
}

function averageOfNumbers(arr) {
  return (
    Math.round((arr.reduce((acc, cur) => acc + cur, 0) / arr.length) * 100) /
    100
  );
}

function theBiggestEvenNumber(arr) {
  let result = arr.filter((value) => value % 2 === 0).sort((a, b) => a - b);
  return result[result.length - 1];
}

function theLowestOddNumber(arr) {
  let result = arr.filter((value) => value % 2 === 1).sort((a, b) => a - b);
  return result[0];
}

function validateNumber(num) {
  if (isNaN(num)) {
    alert("Số bạn nhập không đúng kiểu dữ liệu !");
    return false;
  }
  if (num <= 0) {
    alert("Số bạn không được nhỏ hơn 0 !");
    return false;
  }
  return true;
}
