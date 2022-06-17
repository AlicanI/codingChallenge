"use strict";

// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h

// Task 1

const CarCl = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  acceleration() {
    this.speed += 10;
    console.log(`${this.make}' is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make}' is going at ${this.speed} km/h`);
  }

  // Task2
  get speedUs() {
    return this.speed / 1.6;
  }

  //Task 3
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
};

// Task 4
const car1 = new CarCl("Ford", 120);
car1.acceleration();
car1.acceleration();
car1.acceleration();

car1.brake();
car1.brake();
car1.brake();
car1.brake();
console.log(car1);

car1.speed = 50;
console.log(car1);
