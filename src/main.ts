import { Employees } from "../src/features/employee/Employees";
import { Employee } from "../src/features/employee/Employee";

import { Animals } from "../src/features/animal/Animals";
import { Elephant, Zebra, Tiger } from "../src/features/animal/Zoo";

class Zookeeper extends Employee {
  protected feedLog: { animal: string; time: Date }[];

  constructor(name: string) {
    super("");
    this.feedLog = [];
    this.name = name
  }

  enterZoo(): void {
    this.isEmployeeAtZoo = true;
  }

  leaveZoo(): void {
    this.isEmployeeAtZoo = false;
  }

  takeSafetyTrainings(): void {
    this.safetyTrainingCompletionDate = new Date();
  }

  feedAnimal(animal: string): void {
    this.feedLog.push({ animal, time: new Date() });
  }

  getFeedLog(): { animal: string; time: Date }[] {
    return this.feedLog;
  }
}

const employees = new Employees();

const zookeeper1 = new Zookeeper("Steave");
const zookeeper2 = new Zookeeper("Irvin");

zookeeper1.enterZoo()
zookeeper1.takeSafetyTrainings()


employees.addEmployee(zookeeper1)
employees.addEmployee(zookeeper2);


const allEmployees = employees.getEmployees();
console.log(allEmployees);



const animals = new Animals();

const elephant = new Elephant("Drambliauskas", 10, 5000);
const zebra = new Zebra("Zebranskas", 5, 60, "Africa");
const tiger = new Tiger("Tigrevicius", 7, true);

animals.addAnimal(elephant);
animals.addAnimal(zebra);
animals.addAnimal(tiger);

const allAnimals = animals.getAnimals();
console.log(allAnimals);
