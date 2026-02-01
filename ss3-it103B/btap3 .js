let successCount = 0;   
let failCount = 0;      

while (true) {
    let choice = prompt("Có yêu cầu gia hạn mới không? (có/không)");

    if (choice === "không") {
        break; 
    }

    if (choice !== "có") {
        console.log("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }

    const userName = prompt("Tên bạn đọc");
    const nameBook = prompt("Tên sách");

    let currentDays;
    let extendDays;

    do {
        currentDays = +prompt("Số ngày đã mượn hiện tại (>= 1)");
    } while (currentDays < 1 || !Number.isInteger(currentDays));

    do {
        extendDays = +prompt("Số ngày muốn gia hạn thêm (>= 1)");
    } while (extendDays < 1 || !Number.isInteger(extendDays));

    const totalDays = currentDays + extendDays;

    if (totalDays > 60) {
        console.log("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa");
        failCount++;
    } else if (currentDays > 45) {
        console.log("Không được gia hạn: Đã mượn quá lâu (>45 ngày)");
        failCount++;
    } else if (totalDays <= 30) {
        console.log("Gia hạn thành công");
        successCount++;
    } else {
        console.log("Gia hạn thành công");
        successCount++;
    }
}


console.log("===== THỐNG KÊ CA LÀM VIỆC =====");
console.log("Số lần gia hạn thành công: " + successCount);
console.log("Số lần gia hạn không thành công: " + failCount);
