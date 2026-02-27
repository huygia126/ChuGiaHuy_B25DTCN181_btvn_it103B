const player = {
  name: "De Bruyne",
  position: "Forward",
  goals: 25,
  assists: 15,
  matchesPlayed: 35,
};
function addPerformanceScore(player) {
  const performance = Number(
    ((player.goals + player.assists) / player.matchesPlayed).toFixed(2),
  );
  player.performancePerMatch = performance;
  player.isKeyPlayer = performance >= 1.0;
  console.log(player);
}
addPerformanceScore(player);