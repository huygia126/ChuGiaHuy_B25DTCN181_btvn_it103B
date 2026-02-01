let totalFeedback = 0;

let seriousComplaint = 0;   
let mediumComplaint = 0;    
let lightComplaint = 0;     
let improvementSuggestion = 0; 
let positiveFeedback = 0;      

while (true) {
    let choice = prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");

    if (choice === "không") {
        break; 
    }

    if (choice !== "có") {
        console.log("Vui lòng nhập 'có' hoặc 'không'");
        continue;
    }

    let readerName;
    do {
        readerName = prompt("Tên bạn đọc (không được để trống)");
    } while (!readerName);

    const readerCard = prompt("Mã thẻ bạn đọc (có thể để trống)");

    let type;
    do {
        type = +prompt(
            "Loại phản hồi:\n1 - Phàn nàn / Khiếu nại\n2 - Đề xuất cải thiện\n3 - Phản hồi tích cực / Khen ngợi"
        );
    } while (![1, 2, 3].includes(type));

    let severity = 0;
    if (type === 1) {
        do {
            severity = +prompt(
                "Mức độ nghiêm trọng:\n1 - Nhẹ\n2 - Trung bình\n3 - Nghiêm trọng"
            );
        } while (![1, 2, 3].includes(severity));
    }

    const content = prompt("Nội dung ngắn gọn (tham khảo)");

    totalFeedback++;

    if (type === 1 && severity === 3) {
        console.log("→ Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
        seriousComplaint++;
    } else if (type === 1 && severity === 2) {
        console.log("→ Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
        mediumComplaint++;
    } else if (type === 1 && severity === 1) {
        console.log("→ Xử lý ngay tại quầy - Khiếu nại nhẹ");
        lightComplaint++;
    } else if (type === 2) {
        console.log("→ Cảm ơn! Đề xuất đã được ghi nhận");
        improvementSuggestion++;
    } else if (type === 3) {
        console.log("→ Cảm ơn bạn đã phản hồi tích cực!");
        positiveFeedback++;
    }
}

console.log("===== BÁO CÁO CUỐI CA =====");
console.log("Tổng số phản hồi/khiếu nại đã xử lý: " + totalFeedback);
console.log("Số khiếu nại nghiêm trọng (mức 3): " + s);
