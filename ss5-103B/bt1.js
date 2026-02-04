const books = [];

const bookCount = +prompt("Bạn muốn trả bao nhiêu cuốn sách?");

// nhập danh sách 
for (let i = 0; i < bookCount; i++) {
    const nameBook = prompt(`Nhập tên cuốn sách thứ ${i + 1}:`);
    books.push(nameBook);
}

// in tổng sách
console.log(`Tổng số sách đã được trả: ${books.length}`);

// in danh sách 
console.log("Danh sách sách đã trả:");
for (let i = 0; i < books.length; i++) {
    console.log(`${i + 1}. ${books[i]}`);
}
