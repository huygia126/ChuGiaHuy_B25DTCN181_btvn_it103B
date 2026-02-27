function generateRankingReport(minMatches, players) {
  const filteredPlayers = players.filter(
    (player) => player.matches >= minMatches,
  );
  const rankedList = filteredPlayers.map((player) => {
    const performanceScore = Number(
      ((player.goals + player.assists) / player.matches).toFixed(2),
    );
    const efficiencyScore = Number(
      (performanceScore - (player.yellowCards / player.matches) * 10).toFixed(
        2,
      ),
    );

    return {
      ...player,
      performanceScore,
      efficiencyScore,
    };
  });
  rankedList.sort((a, b) => {
    if (b.efficiencyScore !== a.efficiencyScore) {
      return b.efficiencyScore - a.efficiencyScore;
    }
    if (b.performanceScore !== a.performanceScore) {
      return b.performanceScore - a.performanceScore;
    }
    return b.goals - a.goals;
  });
  console.log(`XẾP HẠNG ĐỘI BÓNG (từ ${minMatches} trận trở lên)`);
  rankedList.forEach((p, index) => {
    console.log(
      `${index + 1}. ${p.name} - Efficiency: ${p.efficiencyScore.toFixed(2)} | Performance: ${p.performanceScore.toFixed(2)} | Goals: ${p.goals}`,
    );
  });
  console.log(`\nTổng số cầu thủ xếp hạng: ${rankedList.length}`);
  if (rankedList.length > 0) {
    console.log(`Cầu thủ xuất sắc nhất: ${rankedList[0].name}`);
    const top3 = rankedList.slice(0, 3);
    const avgEfficiency =
      top3.reduce((sum, p) => sum + p.efficiencyScore, 0) / top3.length;
    console.log(`Trung bình efficiency top 3: ${avgEfficiency.toFixed(2)}`);
  }
}