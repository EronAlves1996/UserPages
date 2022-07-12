export class User {
    name:string;
    email: string;
    workEmail?: string;
    addedIn: Date;

    constructor(name: string, email:string, workEmail?:string) {
        this.name = name;
        this.email = email;
        this.addedIn = new Date();
        if(workEmail) this.workEmail = workEmail;
    }
}