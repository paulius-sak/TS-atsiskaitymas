import {
  FirstGroupOfAnimals,
  SecondGroupOfAnimals,
  ThirdGroupOfAnimals,
} from "./animal.class";



export class Elephant extends FirstGroupOfAnimals {
  weightKg: number;

  constructor(name: string, age: number, weightKg: number) {
    super(name, age);
    this.weightKg = weightKg;
  }
}

export class Zebra extends SecondGroupOfAnimals {
  maxSpeed: number;
  origin: string;

  constructor(name: string, age: number, maxSpeed: number, origin: string) {
    super(name, age);
    this.maxSpeed = maxSpeed;
    this.origin = origin;
  }
}

export class Tiger extends ThirdGroupOfAnimals {
  wasOutsideInLast8Hours: boolean;

  constructor(
    name: string,
    age: number,
    wasOutsideInLast8Hours: boolean = false,
  ) {
    super(name, age);
    this.wasOutsideInLast8Hours = wasOutsideInLast8Hours;
  }
}
