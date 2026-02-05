const USERNAME = "admin";
const PASSWORD = "12345";
let attempts = 0;
let loggedIn = false;

while (attempts < 3) {
    const inputUser = prompt("Nhập tài khoản:");
    const inputPass = prompt("Nhập mật khẩu:");

    if (inputUser !== USERNAME) {
        alert("Sai Tài khoản");
    } else if (inputPass !== PASSWORD) {
        alert("Sai Mật khẩu");
    } else {
        loggedIn = true;
        alert("Đăng nhập thành công!");
        break;
    }
    attempts++;
}

if (!loggedIn) {
    alert("Tài khoản đã bị khóa");
} else { }