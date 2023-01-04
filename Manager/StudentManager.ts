import {Student} from "../Model/Student";

let readlineSync = require('readline-sync');

export class StudentManager {
    students: Student[] = [];

    addStudent(): void {
        let id: number = +readlineSync.question('Add Id: ')
        let fullname = readlineSync.question('Add Fullname: ')
        let birthday = readlineSync.question('Add Birthday: ')
        let adress = readlineSync.question('Add Adress: ')
        let gpa = readlineSync.question('Add Diem GPA: ')
        let student = new Student(id, fullname, birthday, adress, gpa);
        this.students.push(student)
    }

    showList() {
        console.table(this.students)
    }

    deleteStudent() {
        let id: number = +readlineSync.question("Nhap id can xoa: ")
        while (true) {
            for (let i = 0; i < this.students.length; i++) {
                if (this.students[i].id == id) {
                    this.students.splice(i, 1)
                    return
                }
            }
            console.log("ID khong ton tai, nhap lai")
            id = +readlineSync.question("Nhap id can xoa: ")
        }
    }

    updateStudent() {
        let id: number = +readlineSync.question("Nhap id can sua: ")
        while (true) {
            for (let i = 0; i < this.students.length; i++) {
                if (this.students[i].id == id) {
                    this.students[i].fullname = readlineSync.question("Sua fullname: ")
                    this.students[i].birthday = readlineSync.question("Sua birthday: ")
                    this.students[i].adress = readlineSync.question("Sua adress: ")
                    this.students[i].gpa = readlineSync.question("Sua gpa: ")
                    return
                }
            }
            console.log("ID khong ton tai, nhap lai")
            id = +readlineSync.question("Nhap id can sua: ")
        }
    }
}


