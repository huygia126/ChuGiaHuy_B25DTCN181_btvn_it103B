const squad = [
  ["Nguyen Van A", 10, "FW"],
  ["Tran Van B", 5, "MF"],
  ["Le Van C", 2, "DF"],
  ["Pham Van D", 12, "FW"],
  ["Hoang Van E", 0, "GK"],
  ["Dang Van F", 7, "MF"],
];
function showSquad() {
  console.log("--- DANH SÁCH ĐỘI BÓNG ---");
  squad.forEach(([name, goals, pos]) => {
    console.log(`${name} (${pos}): ${goals} bàn thắng`);
  });
}
function findPlayer() {
  const nameToFind = prompt("Nhập tên cầu thủ cần tìm:");
  const player = squad.find(
    ([name]) => name.toLowerCase() === nameToFind.toLowerCase(),
  );

  if (player) {
    console.log(
      `=> TÌM THẤY: ${player[0]} - Vị trí: ${player[2]} - Bàn thắng: ${player[1]}`,
    );
  } else {
    console.log("=> LỖI: Không tìm thấy cầu thủ này trong đội bóng.");
  }
}
function filterByPosition() {
  const posToFilter = prompt(
    "Nhập vị trí muốn lọc (FW/MF/DF/GK):",
  ).toUpperCase();
  const result = squad.filter(([, , pos]) => pos === posToFilter);

  if (result.length > 0) {
    console.log(`=> KẾT QUẢ LỌC (${posToFilter}):`);
    result.forEach(([name, goals]) => console.log(`- ${name} (${goals} bàn)`));
  } else {
    console.log(`=> Không có cầu thủ nào ở vị trí ${posToFilter}`);
  }
}
function totalGoals() {
  const total = squad.reduce((sum, [, goals]) => sum + goals, 0);
  console.log(`=> Tổng số bàn thắng hiện tại là: ${total} bàn`);
}
function checkPerformance() {
  const hasNotScored = squad.some(([, goals]) => goals === 0);
  const allScored = squad.every(([, goals]) => goals > 0);

  if (hasNotScored) console.log("- Có cầu thủ chưa ghi bàn.");
  if (allScored) console.log("- Tất cả cầu thủ đều đã ghi bàn.");
  else console.log("- Không phải tất cả cầu thủ đều đã ghi bàn.");
}
let choice;
do {
  const menuText = `
--- QUẢN LÝ ĐỘI BÓNG ---
1. Xem danh sách
2. Tìm kiếm (Find)
3. Lọc vị trí (Filter)
4. Tổng bàn thắng (Reduce)
5. Kiểm tra hiệu suất (Some/Every)
0. Thoát

Bạn chọn:`;

  choice = prompt(menuText);

  switch (choice) {
    case "1":
      showSquad();
      break;
    case "2":
      findPlayer();
      break;
    case "3":
      filterByPosition();
      break;
    case "4":
      totalGoals();
      break;
    case "5":
      checkPerformance();
      break;
    case "0":
      console.log("=> Hẹn gặp lại!");
      break;
    default:
      console.log("Lựa chọn không hợp lệ!");
  }
} while (choice !== "0");
