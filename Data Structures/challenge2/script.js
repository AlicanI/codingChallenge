// Coding Challege #2

// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  player: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnabry",
      "Lewandowski",
    ],
    [
      "Burki",
      "Shulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
  date: "Now 9th 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Task 1
const scored = Object.entries(game.scored);
for (const [goal, scorer] of scored) {
  console.log(`Goal ${Number(goal) + 1}: ${scorer}`);
}

//Task 2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average.toFixed(3));

// Task 3

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[teamv]}`;

  console.log(`Odd of ${teamStr} ${odd}`);
}

// const [bayernOdd, draw, borusOdd] = Object.values(game.odds);
// console.log(
//   `Odd of ${game.team1}: ${bayernOdd}\nOdd of draw: ${draw}\nOdd of ${game.team2}: ${borusOdd}`
// );

// Task 4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// //Task 1
// const scored = game.scored;
// const goalsData = Object.entries(scored);
// for (const [scoreNumber, player] of goalsData) {
//   console.log(`Goal ${Number(scoreNumber) + 1} : ${player}`);
// }

// //Task 2

// const odds = Object.values(game.odds);
// console.log(odds);
// let sum = 0;

// for (const odd of odds) {
//   sum += odd;
// }

// const averageOfOdds = sum / 3;
// console.log(averageOfOdds.toFixed(3));

// // Task 3

// console.log(
//   `Odd of victory ${game.team1}: ${odds[0]}\nOdd of draw: ${odds[1]}\nOdd of victory ${game.team2}: ${odds[2]}`
// );

// // task 4
