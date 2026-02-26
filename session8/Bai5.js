const players = [
  "Messi - Forward - 30 - 10",
  "Ronaldo - Forward - 25 - 15",
  "Neymar - Forward - 20 - 18",
  "De Bruyne - Midfielder - 15 - 18",
  "Kante - Midfielder - 5 - 5",
  "Van Dijk - Defender - 3 - 5",
  "Alisson - Goalkeeper - 0 - 0",
];
function reportTopPerformers(minPerformance, players) {
  const filtered = players
    .map((player) => {
      const parts = player.split(" - ");
      const name = parts[0];
      const goals = parseInt(parts[2]);
      const assists = parseInt(parts[3]);
      const performance = goals + assists;
      return { name, performance };
    })
    .filter((p) => p.performance >= minPerformance);
  filtered.forEach((p) => console.log(`${p.name}: ${p.performance}`));
  const total = filtered.reduce((sum, p) => sum + p.performance, 0);
  console.log(`Tổng hiệu suất: ${total}`);
  return total;
}
reportTopPerformers(30, players);
reportTopPerformers(20, players);
reportTopPerformers(50, players);
