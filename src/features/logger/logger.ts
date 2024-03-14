export class Logger {
    private static instance: Logger;
    private messages: string[];

    private constructor() {
        this.messages = [];
    }


    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }


    public logMessage(message: string): void {
        this.messages.push(message);
    }


    public getMessages(): string[] {
        return this.messages;
    }
}