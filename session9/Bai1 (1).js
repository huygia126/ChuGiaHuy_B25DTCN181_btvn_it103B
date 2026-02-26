let choose;
do {
  choose = +prompt(`==== MENU ====
1. Cộng hai số.
2. Trừ hai số.
3. Nhân hai số.
4. Chia hai số.
5. Thoát.`);
  switch (choose) {
    case 1:
      console.log("Vậy Tổng 2 số là : " + addTwoNumber(enterNumbers()));
      break;
    case 2:
      console.log("Vậy Hiệu 2 số là : " + minusTwoNumber(enterNumbers()));
      break;
    case 3:
      console.log("Vậy Tích 2 số là : " + multiplyTwoNumber(enterNumbers()));
      break;
    case 4:
      console.log("Vậy Thương 2 số là : " + divideTwoNumber(enterNumbers()));
      break;
    case 5:
      alert("Hẹn gặp lại !");
      break;
  }
} while (choose != 5);

function enterNumbers() {
  let number1 = +prompt("Vui lòng nhập số thứ nhất !");
  let number2 = +prompt("Vui lòng nhập số thứ hai");
  return [number1, number2];
}
function addTwoNumber(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}
function minusTwoNumber(arr) {
  return arr.reduce((acc, cur) => acc - cur);
}
function multiplyTwoNumber(arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);
}
function divideTwoNumber(arr) {
  if (arr[1] === 0) {
    alert("Không thể chia một số cho 0 !");
    return null;
  }
  return arr[0] / arr[1];
}
