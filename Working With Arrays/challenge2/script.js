"use strict";

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3];
// § Data 2: [16, 6, 10, 5, 6, 1, 4];

const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];

// JONAS's Solution

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  const adults = humanAge.filter((age) => age >= 18);
  console.log(humanAge);
  console.log(adults);

  // const average = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
  const average = adults.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );
  return average;
};

const avg1 = calcAverageHumanAge(ages1);
const avg2 = calcAverageHumanAge(ages2);
console.log(avg1, avg2);

// Mine Solution

// const calcAverageHumanAge = function (ages) {
//   //Task 1
//   const agesOfHuman = ages.map(function (age) {
//     if (age <= 2) {
//       return age * 2;
//     } else {
//       return 16 + age * 4;
//     }
//   });
//   agesOfHuman.forEach(function (age, i) {
//     console.log(`Human ${i + 1} : ${age} years old`);
//   });

//   //Task 2
//   const agesOfHuman18 = agesOfHuman.filter(function (age) {
//     if (age > 18) return age;
//   });
//   agesOfHuman18.forEach(function (age, i) {
//     console.log(`Human ${i + 1} higher than 18: ${age} years old`);
//   });

//   // Task 3
//   const average = agesOfHuman18.reduce(function (acc, cur) {
//     return (acc += cur);
//   }, 0);
//   console.log(average / agesOfHuman18.length);
// };

// calcAverageHumanAge(ages1);
// console.log("-----------------DATA 2--------------");
// calcAverageHumanAge(ages2); //Task 4
