const booksId = [];
const booksName = [];
const bookStatus = [];


const total = +prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?");


for (let i = 0; i < total; i++) {
    const id = prompt(`Nhập mã sách thứ ${i + 1}:`);
    const name = prompt(`Nhập tên sách thứ ${i + 1}:`);

    const choice = +prompt(
        "Chọn tình trạng:\n1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp"
    );

    let status = "";
    if (choice === 1) status = "Hỏng nhẹ";
    else if (choice === 2) status = "Hỏng nặng";
    else status = "Cần sửa gấp";

    booksId.push(id);
    booksName.push(name);
    bookStatus.push(status);
}


console.log("DANH SÁCH BAN ĐẦU:");
for (let i = 0; i < booksId.length; i++) {
    console.log(
        `${i + 1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`
    );
}


while (true) {
    const menu = +prompt(
        "Bạn muốn làm gì?\n1. Sửa tình trạng sách\n2. Xóa sách\n0. Kết thúc"
    );

    if (menu === 0) break;


    if (menu === 1) {
        const editId = prompt("Nhập mã sách cần sửa:");
        let index = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === editId) {
                index = i;
            }
        }

        if (index === -1) {
            console.log("Không tìm thấy sách");
        } else {
            const newChoice = +prompt(
                "Chọn tình trạng mới:\n1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp\n4. Đã sửa xong\n5. Loại bỏ"
            );

            if (newChoice === 1) bookStatus[index] = "Hỏng nhẹ";
            else if (newChoice === 2) bookStatus[index] = "Hỏng nặng";
            else if (newChoice === 3) bookStatus[index] = "Cần sửa gấp";
            else if (newChoice === 4) bookStatus[index] = "Đã sửa xong";
            else if (newChoice === 5) bookStatus[index] = "Loại bỏ";
        }
    }


    if (menu === 2) {
        const deleteId = prompt("Nhập mã sách cần xóa:");
        let index = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === deleteId) {
                index = i;
            }
        }

        if (index === -1) {
            console.log("Không tìm thấy sách");
        } else {
            booksId.splice(index, 1);
            booksName.splice(index, 1);
            bookStatus.splice(index, 1);
        }
    }


    console.log("DANH SÁCH HIỆN TẠI:");
    for (let i = 0; i < booksId.length; i++) {
        console.log(
            `${i + 1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`
        );
    }
}


let repaired = 0;
let removed = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") repaired++;
    if (bookStatus[i] === "Loại bỏ") removed++;
}

console.log("===== BÁO CÁO CUỐI =====");
console.log("Tổng số sách còn lại:", booksId.length);
console.log("Số sách đã sửa xong:", repaired);
console.log("Số sách loại bỏ:", removed);

console.log("DANH SÁCH CUỐI:");
for (let i = 0; i < booksId.length; i++) {
    console.log(
        `${i + 1}. ${booksId[i]} - ${booksName[i]} - ${bookStatus[i]}`
    );
}
