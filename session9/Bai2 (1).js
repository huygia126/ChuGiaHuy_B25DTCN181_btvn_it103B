let choose;
let studentList = [];
do {
  choose = +prompt(`=== MENU QUẢN LÝ SINH VIÊN ===
1. Nhập danh sách sinh viên
2. Hiển thị danh sách sinh viên
3. Tìm sinh viên theo tên
4. Xóa sinh viên khỏi danh sách
5. Thoát`);
  switch (choose) {
    case 1:
      let count;
      while (true) {
        count = +prompt("Vui lòng nhập số sinh viên cần thêm vào !");
        if (!validateNumber(count)) {
          continue;
        }
        break;
      }
      enterStudent(count);
      break;
    case 2:
      displayStudent(studentList);
      break;
    case 3:
      alert(findStudent(studentList, enterYourName()));
      break;
    case 4:
      deleteStudentFormArray(studentList, enterYourName());
      break;
    case 5:
      break;
    default:
      alert("Số bạn nhập không phu hợp !");
  }
} while (choose !== 5);

function enterStudent(n) {
  let student = n;
  let name;
  while (n--) {
    while (true) {
      name = prompt("Vui lòng nhập tên của sinh viên");
      if (!validateName(name)) {
        continue;
      }
      studentList.push(name);
      break;
    }
  }
  alert("Đã thêm " + student + " Học sinh");
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

function displayStudent(arr) {
  if (arr.length === 0) {
    alert("Mảng của bạn phải thêm học sinh trước khi chọn chức năng này !!");
  } else {
    let line = "";
    arr.forEach((value) => {
      line += `Tên: ${value}\n`;
    });
    alert("Danh Sách Học Sinh \n" + line);
  }
}
function findStudent(arr, name) {
  if (arr.length === 0) {
    alert("Mảng của bạn phải thêm học sinh trước khi chọn chức năng này !!");
  } else {
    const result = arr.filter((value) => value === name);
    return result.length > 0
      ? `Tìm thấy có học sinh ${result}`
      : "Không có sinh viên cần tìm";
  }
}
function deleteStudentFormArray(arr, name) {
  if (arr.length === 0) {
    alert("Mảng của bạn phải thêm học sinh trước khi chọn chức năng này !!");
  } else {
    let hadDelete = false;
    arr.forEach((value, index) => {
      if (value === name) {
        hadDelete = true;
        arr.splice(index, 1);
      }
    });
    if (hadDelete) {
      alert("Đã Xóa thành công !");
    } else {
      alert("Không tìm thấy học sinh cần xóa !");
    }
  }
}

function enterYourName() {
  let nameTheStudentWannaFind;
  while (true) {
    nameTheStudentWannaFind = prompt("Vui lòng nhập tên của sinh viên");
    if (!validateName(nameTheStudentWannaFind)) {
      continue;
    }
    break;
  }
  return nameTheStudentWannaFind;
}

function validateName(name) {
  if (!name) {
    alert("Tên bạn không được bỏ trống");
    return false;
  }
  name = name.trim();
  if (name.length === 0) {
    alert("Tên không được để trống !");
    return false;
  }
  if (/\d/.test(name)) {
    alert("Tên không được chứa số !");
    return false;
  }
  if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(name)) {
    alert("Tên không được chứa ký tự đặc biệt !");
    return false;
  }

  return true;
}
