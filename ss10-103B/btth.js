let squad = [
  { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
  { id: 2, name: "Tran Van B", goals: 5, position: "MF" },
  { id: 3, name: "Le Van C", goals: 0, position: "DF" },
  { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
  { id: 5, name: "Dang Van E", goals: 0, position: "GK" },
];
S;
function displaySquad() {
  let message = "=> DANH SÁCH ĐỘI HÌNH:\n";
  squad.forEach((p) => {
    message += `Mã ${p.id} - ${p.name} (${p.position}): ${p.goals} bàn\n`;
  });
  alert(message);
}
function createPlayer() {
  let name = prompt("Nhập tên cầu thủ:");
  if (!name) return;

  let goals = Number(prompt("Nhập số bàn thắng:", 0));
  let pos = prompt("Nhập vị trí (FW/MF/DF/GK):").toUpperCase();
  let newId = squad.length > 0 ? squad[squad.length - 1].id + 1 : 1;

  squad.push({ id: newId, name: name, goals: goals, position: pos });
  alert(`Đã thêm thành công cầu thủ ${name}!`);
}
function findPlayer() {
  let searchId = Number(prompt("Nhập ID cần tìm:"));
  let found = squad.find((p) => p.id === searchId);
  if (found) {
    alert(`THÔNG TIN: ${found.name} - ${found.position} - ${found.goals} bàn`);
  } else {
    alert("Không tìm thấy!");
  }
}
function recordGoal() {
  let updateId = Number(prompt("Nhập ID cầu thủ ghi bàn:"));
  let player = squad.find((p) => p.id === updateId);
  if (player) {
    player.goals += 1;
    alert(`Đã cập nhật: ${player.name} hiện có ${player.goals} bàn.`);
  } else {
    alert("ID không tồn tại.");
  }
}
function transferPlayer() {
  let deleteId = Number(prompt("Nhập ID cầu thủ cần xóa:"));
  let index = squad.findIndex((p) => p.id === deleteId);
  if (index !== -1 && confirm(`Xóa cầu thủ ${squad[index].name}?`)) {
    squad.splice(index, 1);
    alert("Đã xóa thành công!");
  } else {
    alert("Hủy xóa hoặc không tìm thấy ID.");
  }
}
let choice;
do {
  let menu =
    "--- FOOTBALL MANAGER PRO ---\n" +
    "1. Xem đội hình\n" +
    "2. Thêm cầu thủ\n" +
    "3. Tìm kiếm (theo ID)\n" +
    "4. Cập nhật bàn thắng\n" +
    "5. Xóa cầu thủ (Chuyển nhượng)\n" +
    "0. Thoát\n\n" +
    "Lựa chọn của bạn:";

  choice = prompt(menu);

  switch (choice) {
    case "1":
      displaySquad();
      break;
    case "2":
      createPlayer();
      break;
    case "3":
      findPlayer();
      break;
    case "4":
      recordGoal();
      break;
    case "5":
      transferPlayer();
      break;
    case "0":
    case null:
      alert("Tạm biệt!");
      break;
    default:
      alert("Vui lòng chọn từ 0-5!");
  }
} while (choice !== "0");