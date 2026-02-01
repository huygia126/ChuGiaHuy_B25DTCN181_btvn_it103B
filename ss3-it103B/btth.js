
const PASSWORD = "admin123";
let attempts = 0;
let isLogin = false;

while (attempts < 3) {
    let input = prompt("Nhập mật khẩu đăng nhập:");

    if (input === PASSWORD) {
        alert("Đăng nhập thành công");
        isLogin = true;
        break;
    } else {
        attempts++;
        alert("Sai mật khẩu! Còn " + (3 - attempts) + " lần thử.");
    }
}

if (!isLogin) {
    alert("Hệ thống bị khóa");
} else {

    while (true) {
        let choice = prompt(
            "===== MENU THƯ VIỆN =====\n" +
            "1. Nhập lô sách mới\n" +
            "2. Vẽ sơ đồ kệ sách\n" +
            "3. Thoát\n" +
            "Chọn chức năng (1-3):"
        );

        switch (choice) {

            case "1":
                let soSach = parseInt(prompt("Bạn muốn nhập bao nhiêu cuốn sách?"));
                let tongTien = 0;

                for (let i = 1; i <= soSach; i++) {
                    let gia = parseFloat(prompt("Nhập giá tiền cuốn sách thứ " + i));

                    if (gia <= 0 || isNaN(gia)) {
                        alert("Giá không hợp lệ, bỏ qua cuốn này!");
                        continue;
                    }

                    tongTien += gia;
                }

                alert("Tổng giá trị nhập kho đợt này là: " + tongTien + " VND");
                break;

            case "2":
                console.log("===== SƠ ĐỒ KỆ SÁCH =====");

                for (let khu = 1; khu <= 3; khu++) {
                    for (let ke = 1; ke <= 5; ke++) {

                        if (khu === 2 && ke === 3) {
                            console.log("Khu vực 2 - Kệ 3 (Đang sửa chữa)");
                            continue;
                        }

                        console.log("Khu vực " + khu + " - Kệ " + ke);
                    }
                }
                break;

            case "3":
                alert("Hẹn gặp lại!");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
        }

        if (choice === "3") {
            break;
        }
    }
}
