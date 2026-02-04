
let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let n = parseInt(
  prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn? ")
);

while (isNaN(n) || n <= 0) {
  n = parseInt(prompt("Vui lòng nhập số nguyên dương!"));
}


for (let i = 0; i < n; i++) {
  console.log(`\nNhập thông tin bạn đọc thứ ${i + 1}:`);

  let cardId;
  while (true) {
    cardId = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1}:`).trim();

    if (cardId === "") {
      alert("Mã thẻ không được để trống!");
      continue;
    }

    if (readerCardIds.includes(cardId)) {
      alert("Mã thẻ đã tồn tại! Vui lòng nhập mã khác.");
      continue;
    }

    break;
  }

  let name;
  while (true) {
    name = prompt(`Nhập tên bạn đọc thứ ${i + 1}:`).trim();

    if (name === "") {
      alert("Tên bạn đọc không được để trống!");
    } else {
      break;
    }
  }

  let books = prompt(
    `Nhập chuỗi mã sách đang mượn của bạn đọc thứ ${
      i + 1
    } (cách nhau bởi dấu phẩy):`
  ).trim();

  let days;
  while (true) {
    days = parseInt(prompt(`Nhập số ngày quá hạn của bạn đọc thứ ${i + 1}:`));

    if (isNaN(days) || days < 0) {
      alert("Số ngày quá hạn phải là số nguyên ≥ 0!");
    } else {
      break;
    }
  }

  readerCardIds.push(cardId);
  readerNames.push(name);
  borrowedBookCodes.push(books);
  overdueDays.push(days);
}


let count10 = 0;

for (let i = 0; i < n; i++) {
  if (overdueDays[i] >= 10) {
    count10++;
  }
}

console.log(`\nTổng số bạn đọc quá hạn ≥ 10 ngày: ${count10} người`);

console.log("\nCác bạn đọc đang mượn cả sách JS* và PYT*:");

let found = false;

for (let i = 0; i < n; i++) {
  let codes = borrowedBookCodes[i].toUpperCase();

  if (codes.includes("JS") && codes.includes("PYT")) {
    console.log(readerCardIds[i]);
    found = true;
  }
}

if (!found) {
  console.log("Không có bạn đọc nào mượn cả JS và PYT.");
}

let maxIndex = 0;

for (let i = 1; i < n; i++) {
  if (overdueDays[i] > overdueDays[maxIndex]) {
    maxIndex = i;
  }
}

console.log(
  `\nBạn đọc có số ngày quá hạn cao nhất: ${readerNames[maxIndex]} (${overdueDays[maxIndex]} ngày)`
);

let count7 = 0;

for (let i = 0; i < n; i++) {
  if (overdueDays[i] >= 7) {
    count7++;
  }
}

console.log("\nCảnh báo:");

if (count7 === 0) {
  console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (count7 >= 1 && count7 <= 4) {
  console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
  console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}