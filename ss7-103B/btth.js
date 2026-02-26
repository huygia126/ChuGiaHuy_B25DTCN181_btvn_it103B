// Khai báo thư viện nhập dữ liệu
const prompt = require("prompt-sync")({ sigint: true });

// Parallel Arrays
let players = [];
let goals = [];

// 1. addPlayer
function addPlayer(name, goal) {
    players.push(name);
    goals.push(goal);
    console.log(`=> Đã thêm ${name} thành công.`);
}

// 2. showSquad
function showSquad() {
    if (players.length === 0) {
        console.log("=> Đội bóng hiện chưa có cầu thủ nào.");
        return;
    }

    console.log("\n--- DANH SÁCH ĐỘI HÌNH ---");
    for (let i = 0; i < players.length; i++) {
        console.log(`${i + 1}. ${players[i]} - ${goals[i]} bàn`);
    }
}

// 3. getTotalGoals (Function Expression)
const getTotalGoals = function () {
    let total = 0;
    for (let goal of goals) {
        total += goal;
    }
    return total;
};

// 4. findMostGoals
function findMostGoals(goalsArray) {
    if (goalsArray.length === 0) return 0;

    let max = goalsArray[0];
    for (let goal of goalsArray) {
        if (goal > max) {
            max = goal;
        }
    }
    return max;
}

// 5. Main Program
function main() {
    let choice;

    do {
        console.log(`
--- QUẢN LÝ ĐỘI BÓNG ---
1. Nhập cầu thủ mới
2. Xem danh sách đội hình
3. Xem thành tích toàn đội
4. Tìm Vua phá lưới
0. Thoát
        `);

        choice = Number(prompt("Người dùng chọn: "));

        switch (choice) {
            case 1:
                let name = prompt("Nhập tên: ");
                let goal = Number(prompt("Nhập số bàn thắng: "));
                addPlayer(name, goal);
                break;

            case 2:
                showSquad();
                break;

            case 3:
                let totalGoals = getTotalGoals();
                console.log(`=> Tổng số bàn thắng của cả đội là: ${totalGoals} bàn.`);
                break;

            case 4:
                let maxGoals = findMostGoals(goals);
                if (maxGoals === 0) {
                    console.log("=> Chưa có dữ liệu cầu thủ.");
                } else {
                    let index = goals.indexOf(maxGoals);
                    console.log(`=> Vua phá lưới hiện tại: ${players[index]} - ${maxGoals} bàn.`);
                }
                break;

            case 0:
                console.log("=> Thoát chương trình.");
                break;

            default:
                console.log("=> Lựa chọn không hợp lệ.");
        }

    } while (choice !== 0);
}

// Chạy chương trình
main();
