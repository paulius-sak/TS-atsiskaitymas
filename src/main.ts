import { Employees } from "../src/features/employee/Employees";
import { Employee } from "../src/features/employee/Employee";

import { Animals } from "../src/features/animal/Animals";
import { Elephant, Zebra, Tiger } from "../src/features/animal/Zoo";

class Zookeeper extends Employee {
  protected feedLog: { animal: string; time: Date }[];

  constructor(name: string) {
    super("");
    this.feedLog = [];
    this.name = name;
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

zookeeper1.enterZoo();
zookeeper1.takeSafetyTrainings();

employees.addEmployee(zookeeper1);
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

const addEmployeeBtn = document.getElementById(
  "add-employee",
) as HTMLButtonElement;
const title = document.getElementById("title") as HTMLInputElement;

addEmployeeBtn.addEventListener("click", () => {
  const name = title.value.trim();

  if (name !== "") {
    const newZookeeper = new Zookeeper(name);
    newZookeeper.enterZoo();
    newZookeeper.takeSafetyTrainings();

    employees.addEmployee(newZookeeper);

    const allEmployees = employees.getEmployees();
    console.log(allEmployees);

    document.getElementById("employee-message")!.innerText =
      `${name} added successfully.`;

    title.value = "";
  } else {
    document.getElementById("employee-message")!.innerText = "Enter name.";
  }
});

const addAnimal = document.getElementById("add-animal") as HTMLButtonElement;

addAnimal.addEventListener("click", () => {
  const animalSelect = document.getElementById("choose-animal") as HTMLSelectElement;
  const selectedAnimal: string = animalSelect.value;

  let newAnimal;

  switch (selectedAnimal) {
    case "Elephant":{
      const elephantName = (document.getElementById("elephant-name") as HTMLInputElement).value.trim();
      const elephantWeight = parseFloat((document.getElementById("elephant-weight") as HTMLInputElement).value.trim());
      const elephantAge = parseInt((document.getElementById("elephant-age") as HTMLInputElement).value.trim());
      if (!elephantName || isNaN(elephantWeight) || isNaN(elephantAge)) {
        alert("Please fill in all required fields for Elephant.");
        return;
    }
      newAnimal = new Elephant(elephantName, elephantAge, elephantWeight);
      break;
        }
    case "Zebra": {
      const zebraName = (document.getElementById("zebra-name") as HTMLInputElement).value.trim();
      const zebraAge = parseInt((document.getElementById("zebra-age") as HTMLInputElement).value.trim());
      const zebraMaxSpeed = parseFloat((document.getElementById("zebra-maxSpeed") as HTMLInputElement).value.trim());
      const zebraOrigin = (document.getElementById("zebra-origin") as HTMLInputElement).value.trim();
      if (!zebraName || isNaN(zebraAge) || isNaN(zebraMaxSpeed) || !zebraOrigin) {
        alert("Please fill in all required fields for Zebra.");
        return;
    }
      newAnimal = new Zebra(zebraName, zebraAge, zebraMaxSpeed, zebraOrigin);
      break;
    }
    case "Tiger": {
      const tigerName = (document.getElementById("tiger-name") as HTMLInputElement).value.trim();
      const tigerAge = parseInt((document.getElementById("tiger-age") as HTMLInputElement).value.trim());
      if (!tigerName || isNaN(tigerAge)) {
        alert("Please fill in all required fields for Tiger.");
        return;
    }
      newAnimal = new Tiger(tigerName, tigerAge);
      break;
    }
    default:
      return
  }

  animals.addAnimal(newAnimal);

  const allAnimals = animals.getAnimals();
  console.log(allAnimals);

  const animalMessage = document.getElementById("animal-message");
  if (animalMessage) {
    animalMessage.innerText = `${selectedAnimal} added successfully.`;
  }

  const inputFields = document.querySelectorAll(".animal-fields input");
  inputFields.forEach((input) => ((input as HTMLInputElement).value = ""));
});



const animalSelect = document.getElementById("choose-animal") as HTMLSelectElement;

animalSelect.addEventListener("change", () => {
    const selectedAnimal = animalSelect.value;
    const animalFields = document.querySelectorAll(".animal-fields") as NodeListOf<HTMLElement>;

    // Hide all animal fields initially
    animalFields.forEach(field => {
        field.style.display = "none";
    });

    // Show fields corresponding to the selected animal
    const selectedAnimalFields = document.getElementById(`${selectedAnimal.toLowerCase()}-fields`);
    if (selectedAnimalFields) {
        selectedAnimalFields.style.display = "block";
    }
});