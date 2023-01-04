export class Student {
    id: number;
    fullname: string;
    birthday: string;
    adress: string;
    gpa: number;

    constructor(id: number,
                fullname: string,
                birthday: string,
                adress: string,
                gpa: number) {
        this.id = id;
        this.fullname = fullname;
        this.birthday = birthday;
        this.adress = adress;
        this.gpa = gpa
    }

    getId(): number {
        return this.id;
    }

    getFullname(): string {
        return this.fullname;
    }

    getBirthday(): string {
        return this.birthday;
    }

    getAdress(): string {
        return this.adress;
    }

    getGpa(): number {
        return this.gpa;
    }

}




