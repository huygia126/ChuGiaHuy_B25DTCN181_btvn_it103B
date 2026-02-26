const players = [
  "Messi - Forward - 30",
  "Ronaldo - Forward - 28",
  "Neymar - Forward - 20",
  "De Bruyne - Midfielder - 15",
  "Kante - Midfielder - 10",
  "Van Dijk - Defender - 5",
  "Alisson - Goalkeeper - 0",
];
function getReversedNames(players) {
  return players
    .map(function (player) {
      return player.split(" - ")[0];
    })
    .reverse();
}
console.log(getReversedNames(players));
