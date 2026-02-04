const books = [];
const lateBook = +prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn? ");



for (let i = 0; i < lateBook; i++) {
    const nameBook = prompt(`Nhâp tên sách bị trả muộn thứ ${i + 1}: `);
    books.push(nameBook);
}

console.log(`Tổng số sách bị trả muộn:${books.length}`);

console.log(`Danh sách bị trả muộn: `);

for (let i = 0; i < books.length; i++) {
    console.log(`${i + 1}.${books[i]}`);
}

let countName = 0;
for (let i = 0; i < books.length; i++) {
    if (books[i].length > 20) {
        countName++;
    }
}

console.log(`Số lượng sách có tên dài hơn 20 ký tự: ${countName}`);
