export abstract class Employee {
    name: string
    protected isEmployeeAtZoo: boolean;
    protected safetyTrainingCompletionDate: Date | null;

    constructor(name: string) {
        this.name = name
        this.isEmployeeAtZoo = false;
        this.safetyTrainingCompletionDate = null;
    }

    abstract enterZoo(): void;
    abstract leaveZoo(): void;
    abstract takeSafetyTrainings(): void;

    getIsEmployeeAtZoo(): boolean {
        return this.isEmployeeAtZoo;
    }

    getSafetyTrainingCompletionDate(): Date | null {
        return this.safetyTrainingCompletionDate;
    }
}