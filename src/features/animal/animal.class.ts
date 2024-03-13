class  Animal  {
    name: string;
    age: number;

    constructor(name: string, age: number) {

        this.name = name;
        this.age = age
    }

    makeSound(): void {
        console.log("Animal makes sound");
    }
}
export class FirstGroupOfAnimals extends Animal {

    sleep(): void  {
        console.log("animal sleeps")
    }

    walk(): void  {
        console.log("animal walks")
    }
}

export class SecondGroupOfAnimals extends Animal {

    jump(): void  {
        console.log("animal jumps")
    }

    run(): void  {
        console.log("animal runs")
    }
}

export class ThirdGroupOfAnimals extends Animal {

    swim(): void  {
        console.log("animal swims")
    }

    hunt(): void  {
        console.log("animal hunting")
    }
}

