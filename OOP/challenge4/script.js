"use strict";
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

// const car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  //

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is goin at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is goin at ${this.speed} km/h`);
    return this;
  }
}

class EVCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is goin at ${this.speed} km/h and charge is  ${
        this.#charge
      }`
    );

    return this;
  }
}

const car1 = new EVCL("Rivian", 120, 23);
console.log(car1);
