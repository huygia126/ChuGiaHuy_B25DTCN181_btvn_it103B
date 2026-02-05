
let arr = [];


function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function displayMenu() {
  console.log("\n================== MENU ===================");
  console.log("1. Nhập số phần tử cần nhập và giá trị các phần tử");
  console.log("2. In ra giá trị các phần tử đang quản lý");
  console.log("3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần");
  console.log("4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng");
  console.log("5. In ra các số nguyên tố trong mảng và tính tổng");
  console.log("6. Nhập một số và đếm số lần xuất hiện trong mảng");
  console.log("7. Thêm một phần tử vào vị trí chỉ định");
  console.log("8. Xóa một phần tử theo giá trị");
  console.log("9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần");
  console.log("0. Thoát");
  console.log("============================================");
}

function inputArray() {
  const input = prompt("Nhập số phần tử cần nhập:");
  const n = parseInt(input);
  
  if (isNaN(n) || n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
    return;
  }
  
  arr = [];
  for (let i = 0; i < n; i++) {
    const value = prompt(`Nhập giá trị phần tử thứ ${i + 1}:`);
    arr.push(isNaN(value) ? value : Number(value));
  }
  
  console.log("✓ Đã nhập mảng thành công!");
  console.log("Mảng:", arr);
}

function displayArray() {
  if (arr.length === 0) {
    console.log("Mảy rỗng!");
    return;
  }
  console.log("Các phần tử trong mảng:", arr);
}

function displayEvenSorted() {
  if (arr.length === 0) {
    console.log("Mảy rỗng!");
    return;
  }
  
  const evenNumbers = arr.filter(n => typeof n === 'number' && n % 2 === 0);
  
  if (evenNumbers.length === 0) {
    console.log("Không có phần tử chẵn trong mảng");
    return;
  }
  
  const sum = evenNumbers.reduce((acc, n) => acc + n, 0);
  const sorted = evenNumbers.sort((a, b) => b - a);
  
  console.log("Các phần tử chẵn (sắp xếp giảm dần):", sorted);
  console.log("Tổng các phần tử chẵn:", sum);
}

function displayMinMaxPosition() {
  if (arr.length === 0) {
    console.log("Mảy rỗng!");
    return;
  }
  
  const numbers = arr.filter(n => typeof n === 'number');
  if (numbers.length === 0) {
    console.log("Không có phần tử số trong mảng");
    return;
  }
  
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  
  const maxIndex = arr.indexOf(max) + 1;
  const minIndex = arr.indexOf(min) + 1;
  
  console.log("Giá trị lớn nhất:", max, "- Vị trí:", maxIndex);
  console.log("Giá trị nhỏ nhất:", min, "- Vị trí:", minIndex);
}

function displayPrimes() {
  if (arr.length === 0) {
    console.log("Mảy rỗng!");
    return;
  }
  
  const primes = arr.filter(n => typeof n === 'number' && isPrime(n));
  
  if (primes.length === 0) {
    console.log("Không có số nguyên tố trong mảng");
    return;
  }
  
  const sum = primes.reduce((acc, n) => acc + n, 0);
  
  console.log("Các số nguyên tố:", primes);
  console.log("Tổng các số nguyên tố:", sum);
}

function countElement() {
  if (arr.length === 0) {
    console.log("Mảy rỗng!");
    return;
  }
  
  const value = prompt("Nhập số cần đếm:");
  const searchValue = isNaN(value) ? value : Number(value);
  
  const count = arr.filter(n => n === searchValue).length;
  
  console.log(`Trong mảng có ${count} phần tử có giá trị ${searchValue}`);
}

function addElement() {
  if (arr.length === 0) {
    console.log("Mảy rỗng! Hãy nhập mảng trước.");
    return;
  }
  
  const posInput = prompt(`Nhập vị trí cần thêm (1 đến ${arr.length + 1}):`);
  const pos = parseInt(posInput) - 1;
  
  if (isNaN(pos) || pos < 0 || pos > arr.length) {
    console.log("Vị trí không hợp lệ!");
    return;
  }
  
  const value = prompt("Nhập giá trị cần thêm:");
  const newValue = isNaN(value) ? value : Number(value);
  
  arr.splice(pos, 0, newValue);
  
  console.log("✓ Đã thêm phần tử thành công!");
  console.log("Mảy hiện tại:", arr);
}

function deleteElement() {
  if (arr.length === 0) {
    console.log("Mảy rỗng!");
    return;
  }
  
  const value = prompt("Nhập giá trị cần xóa:");
  const deleteValue = isNaN(value) ? value : Number(value);
  
  const index = arr.indexOf(deleteValue);
  
  if (index === -1) {
    console.log(`Không tìm thấy phần tử có giá trị ${deleteValue}`);
    return;
  }
  
  arr.splice(index, 1);
  
  console.log(`✓ Đã xóa phần tử có giá trị ${deleteValue}`);
  console.log("Mảy hiện tại:", arr);
}

function sortArray() {
  if (arr.length === 0) {
    console.log("Mảy rỗng!");
    return;
  }
  
  const order = prompt("Nhập 1 để sắp xếp tăng dần, 2 để sắp xếp giảm dần:");
  
  const numbers = arr.filter(n => typeof n === 'number');
  const strings = arr.filter(n => typeof n === 'string');
  
  if (order === "1") {
    const sorted = [...numbers].sort((a, b) => a - b).concat(strings.sort());
    arr = sorted;
    console.log("✓ Đã sắp xếp tăng dần");
  } else if (order === "2") {
    const sorted = [...numbers].sort((a, b) => b - a).concat(strings.sort().reverse());
    arr = sorted;
    console.log("✓ Đã sắp xếp giảm dần");
  } else {
    console.log("Lựa chọn không hợp lệ!");
    return;
  }
  
  console.log("Mảy hiện tại:", arr);
}

function main() {
  let running = true;
  
  while (running) {
    displayMenu();
    const choice = prompt("Lựa chọn của bạn (0-9):");
    
    switch (choice) {
      case "1":
        inputArray();
        break;
      case "2":
        displayArray();
        break;
      case "3":
        displayEvenSorted();
        break;
      case "4":
        displayMinMaxPosition();
        break;
      case "5":
        displayPrimes();
        break;
      case "6":
        countElement();
        break;
      case "7":
        addElement();
        break;
      case "8":
        deleteElement();
        break;
      case "9":
        sortArray();
        break;
      case "0":
        console.log("Cảm ơn đã sử dụng chương trình. Tạm biệt!");
        running = false;
        break;
      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn 0-9.");
    }
  }
}

main();
