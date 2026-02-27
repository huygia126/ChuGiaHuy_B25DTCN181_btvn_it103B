const players = [
  {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
    matches: 34,
  },
  {
    name: "Ronaldo",
    position: "Forward",
    age: 39,
    goals: 30,
    assists: 10,
    matches: 38,
  },
  {
    name: "Neymar",
    position: "Forward",
    age: 32,
    goals: 18,
    assists: 20,
    matches: 32,
  },
  {
    name: "De Bruyne",
    position: "Midfielder",
    age: 33,
    goals: 8,
    assists: 25,
    matches: 35,
  },
  {
    name: "Kante",
    position: "Midfielder",
    age: 33,
    goals: 2,
    assists: 5,
    matches: 36,
  },
  {
    name: "Van Dijk",
    position: "Defender",
    age: 33,
    goals: 5,
    assists: 3,
    matches: 33,
  },
  {
    name: "Alisson",
    position: "Goalkeeper",
    age: 31,
    goals: 0,
    assists: 1,
    matches: 37,
  },
];
function addPerformanceScore(player) {
  const performance = Number(
    ((player.goals + player.assists) / player.matches).toFixed(2),
  );
  player.performancePerMatch = performance;
  player.isKeyPlayer = performance >= 1.0;
  console.log(player);
}
console.log("--- Cập nhật hiệu suất cầu thủ ---");
players.forEach((p) => addPerformanceScore(p));
function getFilteredTotalGoals(minGoals, teamPlayers) {
  const total = teamPlayers
    .filter((p) => p.goals >= minGoals)
    .reduce((sum, p) => sum + p.goals, 0);
  return total;
}
console.log("\n--- Kết quả lọc bàn thắng ---");
const min = 5;
const total = getFilteredTotalGoals(min, players);
console.log(
  `Tổng các bàn thắng của các cầu thủ đạt đủ chỉ tiêu (>= ${min} bàn) là: ${total}`,
);