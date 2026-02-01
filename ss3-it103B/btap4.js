let totalBooks = 0;
let lostBooks = 0;
let outOfStockBooks = 0;
let manyStockBooks = 0;
let normalStockBooks = 0;

while (true) {
    let choice = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");

    if (choice === "không") {
        break;
    }

    if (choice !== "có") {
        console.log("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }

    let bookCode;
    do {
        bookCode = prompt("Mã sách (không được để trống)");
    } while (!bookCode);

    const bookName = prompt("Tên sách");

    let quantity;
    do {
        quantity = +prompt("Số lượng thực tế trong kho (>= 0)");
    } while (quantity < 0 || !Number.isInteger(quantity));

    let status;
    do {
        status = +prompt(
            "Tình trạng sách:\n1 - Bình thường (có thể cho mượn)\n2 - Mất"
        );
    } while (status !== 1 && status !== 2);

    if (status === 2) {
        console.log("📕 Sách mất");
        lostBooks++;
    } else if (status === 1 && quantity === 0) {
        console.log("📘 Sách hết (vẫn còn trong hệ thống)");
        outOfStockBooks++;
    } else if (status === 1 && quantity >= 10) {
        console.log("📗 Sách tồn kho nhiều");
        manyStockBooks++;
    } else {
        console.log("📙 Sách tồn kho bình thường");
        normalStockBooks++;
    }

    totalBooks++;
}


console.log("===== BÁO CÁO KIỂM KÊ =====");
console.log("Tổng số sách đã kiểm kê: " + totalBooks + " cuốn");
console.log("Số sách mất: " + lostBooks + " cuốn");
console.log("Số sách hết hàng: " + outOfStockBooks + " cuốn");
