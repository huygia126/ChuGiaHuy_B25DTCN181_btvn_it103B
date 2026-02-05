
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
  console.log("3. In ra giá trị các phần tử chẵn và tính tổng");
  console.log("4. In ra giá trị lớn nhất và nhỏ nhất trong mảng");
  console.log("5. In ra các phần tử là số nguyên tố trong mảng và tính tổng");
  console.log("6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó");
  console.log("7. Thêm một phần tử vào vị trí chỉ định");
  console.log("8. Thoát");
  console.log("============================================");
}

function inputArray() {
  const input = prompt("Nhập số phần tử cần nhập:");
  const n = parseInt(input);
  
  if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
    return;
  }
  
  arr = [];
  for (let i = 0; i < n; i++) {
    const value = prompt(`Nhập giá trị phần tử thứ ${i + 1}:`);
    arr.push(isNaN(value) ? value : Number(value));
  }
  
  console.log("✓ Đã nhập mảng thành công!");
}

function displayArray() {
  if (arr.length === 0) {
    console.log("Mảng rỗng!");
    return;
  }
  console.log("Các phần tử trong mảng:", arr);
}

function displayEven() {
  if (arr.length === 0) {
    console.log("Mảng rỗng!");
    return;
  }
  
  const evenNumbers = arr.filter(n => typeof n === 'number' && n % 2 === 0);
  const sum = evenNumbers.reduce((acc, n) => acc + n, 0);
  
  if (evenNumbers.length === 0) {
    console.log("Không có phần tử chẵn trong mảng");
  } else {
    console.log("Các phần tử chẵn:", evenNumbers);
    console.log("Tổng các phần tử chẵn:", sum);
  }
}

function displayMinMax() {
  if (arr.length === 0) {
    console.log("Mảng rỗng!");
    return;
  }
  
  const numbers = arr.filter(n => typeof n === 'number');
  if (numbers.length === 0) {
    console.log("Không có phần tử số trong mảng");
    return;
  }
  
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  
  console.log("Giá trị lớn nhất:", max);
  console.log("Giá trị nhỏ nhất:", min);
}

function displayPrimes() {
  if (arr.length === 0) {
    console.log("Mảng rỗng!");
    return;
  }
  
  const primes = arr.filter(n => typeof n === 'number' && isPrime(n));
  const sum = primes.reduce((acc, n) => acc + n, 0);
  
  if (primes.length === 0) {
    console.log("Không có số nguyên tố trong mảng");
  } else {
    console.log("Các số nguyên tố:", primes);
    console.log("Tổng các số nguyên tố:", sum);
  }
}

function countElement() {
  if (arr.length === 0) {
    console.log("Mảng rỗng!");
    return;
  }
  
  const value = prompt("Nhập số cần thống kê:");
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
  
  if (pos < 0 || pos > arr.length) {
    console.log("Vị trí không hợp lệ!");
    return;
  }
  
  const value = prompt("Nhập giá trị cần thêm:");
  const newValue = isNaN(value) ? value : Number(value);
  
  arr.splice(pos, 0, newValue);
  
  console.log("✓ Đã thêm phần tử thành công!");
  console.log("Mảng hiện tại:", arr);
}

function main() {
  let running = true;
  
  while (running) {
    displayMenu();
    const choice = prompt("Lựa chọn của bạn (1-8):");
    
    switch (choice) {
      case "1":
        inputArray();
        break;
      case "2":
        displayArray();
        break;
      case "3":
        displayEven();
        break;
      case "4":
        displayMinMax();
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
        console.log("Cảm ơn đã sử dụng chương trình. Tạm biệt!");
        running = false;
        break;
      default:
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn 1-8.");
    }
  }
}

main();
