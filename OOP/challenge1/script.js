"use strict";

// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

// Task 1

const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// Task 2

car.prototype.accelerate = function () {
  this.speed += 10;
  return console.log(`${this.make} is going at ${this.speed} km/h`);
};

//Task 3
car.prototype.brake = function () {
  this.speed -= 5;
  return console.log(`${this.make} is going at ${this.speed} km/h`);
};

// Task 4
const car1 = new car("BMW", 120);
const car2 = new car("Mercedes", 95);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();
console.log("-----------------------------------------------------");
car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();
car2.brake();
