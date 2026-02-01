let n = +prompt("Hôm nay có bao nhiêu lượt mượn sách?");
let totalBorrow = 0; 

if (n <= 0) {
    console.log("Số lượt mượn không hợp lệ");
} else {
    for (let i = 1; i <= n; i++) {
        const nickName = prompt("Tên người mượn");
        const nameBook = prompt("Tên sách");
        const dayBorrow = +prompt("Số ngày mượn (từ 1 đến 30 ngày)");

        if (dayBorrow < 1 || dayBorrow > 30) {
            console.log("Lỗi: Số ngày mượn phải từ 1 đến 30 ngày");
        } else if (dayBorrow > 14) {
            console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
            totalBorrow++; // vẫn tính là 1 lượt mượn
        } else {
            console.log("Mượn thành công");
            totalBorrow++; 
        }
    }

    console.log("Tổng số lượt mượn trong ngày: " + totalBorrow);
}
