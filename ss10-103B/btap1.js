
const player = {
  name: "Messi",
  position: "Forward",
  age: 36,
  goals: 25,
  assists: 15,
};
const showPlayerInfo = (player) => {
  console.log(`Tên: ${player.name}`);
  console.log(`vị trí: ${player.position}`);
  console.log(`Tuổi: ${player.age}`);
  console.log(`Bàn thắng mùa này: ${player.goals}`);
  console.log(`kiến tạo mùa này: ${player.assists}`);
  console.log(`Tổng đóng góp: ${player.goals + player.assists}`);
};
showPlayerInfo(player);
