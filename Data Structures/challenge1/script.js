// Coding Challege #1

// We're building a football betting app !

// Suppose we get data from a web service about a certain game (Below). In this challenge we're gonna work with the data. So here are your tasks:

//1. Create one player array for each team (variables 'player1' and 'players2')
//2. The first player in any player array is the goalkeeper and the others are field player. For Bayern Munich (team 1 ) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 subtitute players. So create  a new array
// ('playersFinal') containing all the orginal team1 players plus 'Thiago','Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1','draw' and 'team2')
// 6. Write a function ('pritGoals') that receives an arbitary number of player names(Not an array) and prints each of them to the console, along with the number of goals who were scored (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win. Without using if/else statement or the ternary operator.

//TEST DATA FOR 6: Use players'Davies','Muller','Lewandowski' and 'Kimmich'.Then, call the function  again with players from game.scored

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

// Task 1
const [players1, players2] = [...game.player];

//Task 2
const [gk, ...fieldPlayers] = [...players1];

//Task 3
const allPlayers = [...players1, ...players2];

//Task 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

//Task 5
const {
  odds: { team1, x: draw, team2 },
} = game;

//Task 6

const printGoals = function (...players) {
  console.log(`there are ${players.length} goals scored. ${players} `);
};

printGoals(...game.scored);

//Task 7
team1 < team2 && console.log(`${game.team1} is more likely to win`);
team1 > team2 && console.log(`${game.team2}is more likely to win`);
