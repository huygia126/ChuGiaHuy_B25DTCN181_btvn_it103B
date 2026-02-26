let choose;
do {
  choose = +prompt(`=== MENU QUẢN LÝ SINH VIÊN ===
1. Tính diện tích hình tròn.
2. Tính chu vi hình tròn.
3. Tính diện tích hình chữ nhật.
4. Tính chu vi hình chữ nhật.
5. Thoát`);
  switch (choose) {
    case 1:
      alert("Vậy Diện tích hình tròn là " + calculateAreaOfACircle());
      break;
    case 2:
      alert("Vậy Chu vi hình tròn là " + calculateCircumferenceOfACircle());
      break;
    case 3:
      alert("Vậy Diện tích hình chữ nhật là " + calculateAreaOfARectangle());
      break;
    case 4:
      alert("Vậy Chu vi hình chữ nhật là " + calculatePerimeterOfARectangle());
      break;
    case 5:
      break;
    default:
      alert("Số bạn nhập không phu hợp !");
  }
} while (choose !== 5);

function calculateAreaOfACircle() {
  let radius;
  while (true) {
    radius = +prompt("Vui lòng nhập bán kính của đường tròn: ");
    if (!validateNumber(radius)) {
      continue;
    }
    break;
  }
  return (Math.PI * radius * radius).toFixed(2);
}

function calculateCircumferenceOfACircle() {
  let radius;
  while (true) {
    radius = +prompt("Vui lòng nhập bán kính của đường tròn: ");
    if (!validateNumber(radius)) {
      continue;
    }
    break;
  }
  return Math.round(Math.PI * 2 * radius * 100) / 100;
}

function calculateAreaOfARectangle() {
  let length;
  let width;
  while (true) {
    length = +prompt("Vui lòng nhập chiều dài của bạn");
    width = +prompt("Vui lòng nhập chiều rộng !");
    if (!validateNumber(length) || !validateNumber(width)) {
      continue;
    }
    break;
  }
  return Math.round(length * width * 100) / 100;
}

function calculatePerimeterOfARectangle() {
  let length;
  let width;
  while (true) {
    length = +prompt("Vui lòng nhập chiều dài của bạn");
    width = +prompt("Vui lòng nhập chiều rộng !");
    if (!validateNumber(length) || !validateNumber(width)) {
      continue;
    }
    break;
  }
  return Math.round((length + width) * 2 * 100) / 100;
}

function validateNumber(num) {
  if (isNaN(num)) {
    alert("Số bạn nhập không đúng kiểu dữ liệu !");
    return false;
  }
  if (num < 0) {
    alert("Số bạn không được nhỏ hơn 0 !");
    return false;
  }
  return true;
}
