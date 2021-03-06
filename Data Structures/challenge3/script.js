//Coding Challenge 3

// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: β½ GOAL

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

const gameEvents = new Map([
  [17, "β½GOAL"],
  [36, "π± Substitution"],
  [47, "β½ GOAL"],
  [61, "π± Substitution"],
  [64, "π‘ Yellow Card"],
  [69, "π΄ Red Card"],
  [70, "π± Substitution"],
  [72, "π± Substitution"],
  [76, "β½ GOAL"],
  [80, "β½ GOAL"],
  [92, "π‘ Yellow Card"],
]);

// Task 1
const events = [...new Set(gameEvents.values())];
console.log(events);

//Taks 2
gameEvents.delete(64);
console.log(gameEvents);

// Task 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//BONUS (Accurate Result)
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//Task 4
for (const [time, event] of gameEvents)
  time < 45
    ? console.log(`[FIRST HALF] ${time}: ${event}`)
    : console.log(`[SECOND HALF] ${time}: ${event}`);
