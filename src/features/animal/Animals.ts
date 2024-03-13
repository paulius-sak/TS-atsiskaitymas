import {Elephant, Zebra, Tiger} from "./Zoo"

export class Animals {
    private animals: (Elephant | Zebra | Tiger)[];
  
    constructor() {
        this.animals = [];
    }
  
    addAnimal(animal: Elephant | Zebra | Tiger): void {
        this.animals.push(animal);
    }
  
    removeAnimal(animal: Elephant | Zebra | Tiger): void {
        const index = this.animals.indexOf(animal);
        if (index !== -1) {
            this.animals.splice(index, 1);
        }
    }
  
    getAnimals(): (Elephant | Zebra | Tiger)[] {
        return this.animals;
    }
  }