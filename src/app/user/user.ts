export class User {

    name:string;
    email: string;
    workEmail?: string;
    addedIn: Date;
    imgUrl: string;

    constructor(name: string, email:string, imgUrl: string, workEmail?:string) {
        this.name = name;
        this.email = email;
        this.addedIn = new Date();
        this.imgUrl = imgUrl;
        if(workEmail) this.workEmail = workEmail;
    }
}