const players = [
  { name: "Messi", years: 18, salary: 100 },
  { name: "Ronaldo", years: 20, salary: 95 },
  { name: "Neymar", years: 12, salary: 90 },
  { name: "Mbappe", years: 7, salary: 85 },
  { name: "Haaland", years: 5, salary: 80 },
  { name: "Modric", years: 22, salary: 70 },
  { name: "Benzema", years: 19, salary: 75 },
];
function analyzeSalary(minYears, teamPlayers) {
  const filteredPlayers = teamPlayers.filter(
    (player) => player.years >= minYears,
  );
  if (filteredPlayers.length === 0) {
    return {
      totalSalary: 0,
      highestPaid: null,
      lowestPaid: null,
    };
  }
  const totalSalary = filteredPlayers.reduce(
    (sum, player) => sum + player.salary,
    0,
  );
  const highestPaid = filteredPlayers.reduce(
    (max, p) => (p.salary > max.salary ? p : max),
    filteredPlayers[0],
  );
  const lowestPaid = filteredPlayers.reduce(
    (min, p) => (p.salary < min.salary ? p : min),
    filteredPlayers[0],
  );
  return {
    totalSalary: totalSalary,
    highestPaid: {
      name: highestPaid.name,
      years: highestPaid.years,
      salary: highestPaid.salary,
    },
    lowestPaid: {
      name: lowestPaid.name,
      years: lowestPaid.years,
      salary: lowestPaid.salary,
    },
  };
}
console.log(analyzeSalary(10, players));
console.log(analyzeSalary(30, players));