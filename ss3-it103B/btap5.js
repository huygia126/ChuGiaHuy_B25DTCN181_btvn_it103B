let totalRequests = 0;
let successCount = 0;
let rejectCount = 0;
let pendingCount = 0;

while (true) {
    let choice = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");

    if (choice === "không") {
        break; 
    }

    if (choice !== "có") {
        console.log("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }


    const readerName = prompt("Tên bạn đọc");
    const bookCode = prompt("Mã sách muốn đặt trước");
    const bookName = prompt("Tên sách (chỉ tham khảo)");

    let waitDays;
    do {
        waitDays = +prompt("Số ngày dự kiến chờ (>= 1)");
    } while (waitDays < 1 || !Number.isInteger(waitDays));

    let priority;
    do {
        priority = +prompt(
            "Ưu tiên:\n1 - Sinh viên bình thường\n2 - Giảng viên/Nghiên cứu sinh\n3 - Nhân viên thư viện / Đặc cách"
        );
    } while (![1, 2, 3].includes(priority));

    totalRequests++;

    if (waitDays > 45) {
        console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
        rejectCount++;
    } else if (priority === 3) {
        console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
        successCount++;
    } else if (priority === 2 && waitDays <= 30) {
        console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
        successCount++;
    } else if (priority === 1 && waitDays <= 21) {
        console.log("Đặt trước thành công");
        successCount++;
    } else {
        console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
        pendingCount++;
    }
}


console.log("===== BÁO CÁO CUỐI CA =====");
console.log("Tổng số yêu cầu đã xử lý: " + totalRequests);
console.log("Số yêu cầu được đặt trước thành công: " + successCount);
console.log("Số yêu cầu bị từ chối: " + rejectCount);
console.log("Số yêu cầu chờ xét duyệt: " + pendingCount);
