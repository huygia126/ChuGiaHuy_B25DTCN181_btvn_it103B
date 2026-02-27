function generatePlayerSeasonReport(playerName, teamHistory) {
  const player = teamHistory.find((p) => p.name === playerName);
  if (!player) {
    return `Không tìm thấy cầu thủ ${playerName}`;
  }
  let totalMatches = 0;
  let totalGoals = 0;
  let totalAssists = 0;
  let totalYellowCards = 0;
  let bestSeasonKey = null;
  let bestSeasonData = null;
  const seasonKeys = Object.keys(player.seasons);
  seasonKeys.forEach((season) => {
    const current = player.seasons[season];
    totalMatches += current.matches;
    totalGoals += current.goals;
    totalAssists += current.assists;
    totalYellowCards += current.yellowCards;
    if (
      !bestSeasonData ||
      current.goals > bestSeasonData.goals ||
      (current.goals === bestSeasonData.goals &&
        current.assists > bestSeasonData.assists)
    ) {
      bestSeasonKey = season;
      bestSeasonData = current;
    }
  });
  const report = {
    name: player.name,
    position: player.position,
    nationality: player.nationality,
    careerStats: {
      totalMatches: totalMatches,
      totalGoals: totalGoals,
      totalAssists: totalAssists,
      totalYellowCards: totalYellowCards,
      averageGoalsPerMatch: Number((totalGoals / totalMatches).toFixed(2)),
      averageAssistsPerMatch: Number((totalAssists / totalMatches).toFixed(2)),
    },
    bestSeason: {
      season: bestSeasonKey,
      goals: bestSeasonData.goals,
      assists: bestSeasonData.assists,
    },
  };

  return report;
}
const report = generatePlayerSeasonReport("Messi", teamHistory);
console.log(report);