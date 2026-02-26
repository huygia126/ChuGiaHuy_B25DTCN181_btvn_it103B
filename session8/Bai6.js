const players = [
  "Messi - Forward - 25 - 15 - 34",
  "Ronaldo - Forward - 30 - 10 - 38",
  "Neymar - Forward - 18 - 20 - 32",
  "De Bruyne - Midfielder - 8 - 25 - 35",
  "Kante - Midfielder - 2 - 5 - 36",
  "Van Dijk - Defender - 5 - 3 - 33",
  "Alisson - Goalkeeper - 0 - 1 - 37",
];

function reportByPosition(players, minGoals = 5) {
  const filteredData = players
    .map((p) => {
      const [name, pos, goals, assists, matches] = p.split(" - ");
      return {
        name,
        pos,
        goals: parseInt(goals),
        assists: parseInt(assists),
        matches: parseInt(matches),
      };
    })
    .filter((p) => p.goals >= minGoals);
  console.log("BÁO CÁO HIỆU SUẤT THEO VỊ TRÍ");
  const positions = [...new Set(filteredData.map((p) => p.pos))];
  positions.forEach((position) => {
    const group = filteredData.filter((p) => p.pos === position);
    const totalGoals = group.reduce((sum, p) => sum + p.goals, 0);
    const totalAssists = group.reduce((sum, p) => sum + p.assists, 0);
    const totalMatches = group.reduce((sum, p) => sum + p.matches, 0);
    const avgPerf = ((totalGoals + totalAssists) / totalMatches).toFixed(2);
    console.log(`\n${position}:`);
    console.log(`- Số cầu thủ: ${group.length}`);
    console.log(`- Tổng bàn thắng: ${totalGoals}`);
    console.log(`- Tổng kiến tạo: ${totalAssists}`);
    console.log(`- Tổng số trận: ${totalMatches}`);
    console.log(`- Trung bình hiệu suất/trận: ${avgPerf}`);
  });
  const totalTeamGoals = filteredData.reduce((sum, p) => sum + p.goals, 0);
  console.log("\n------------------------");
  console.log(`Tổng bàn thắng toàn đội : ${totalTeamGoals}`);
}
reportByPosition(players, 5);
