let n;
let userName;
let nameBook;
let dayBorrow;
let count = 0;

n = +prompt("Hôm nay có bao nhiêu lượt trả sách?");

if (n <= 0) {
    console.log("Số lượt trả không hợp lệ");
} else {
    for (let i = 1; i <= n; i++) {
        console.log("---- Lượt trả thứ " + i + " ----");

        userName = prompt("Tên người trả:");
        nameBook = prompt("Tên sách:");

        do {
            dayBorrow = +prompt("Số ngày mượn (>= 1):");
        } while (dayBorrow < 1 || !Number.isInteger(dayBorrow));

        if (dayBorrow <= 14) {
            console.log("Trả đúng hạn");
        } else if (dayBorrow >= 15 && dayBorrow <= 21) {
            console.log("Trả muộn nhẹ");
            console.log("Phạt nhắc nhở");
            count++;
        } else {
            console.log("Quá hạn nghiêm trọng");
            console.log("Cần ghi biên bản phạt");
            count++;
        }
    }

    console.log(`Tổng số lượt trả sách: ${n}`);
    console.log(`Số lượt trả muộn (≥ 15 ngày): ${count}`);
}
