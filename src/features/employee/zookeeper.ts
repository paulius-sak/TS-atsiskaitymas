import {Employee} from "./Employee"

class Zookeeper extends Employee {
    protected feedLog: { animal: string; time: Date }[];

    constructor() {
        super("");
        this.feedLog = [];
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

