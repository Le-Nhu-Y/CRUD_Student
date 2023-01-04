"use strict";
exports.__esModule = true;
exports.StudentManager = void 0;
var Student_1 = require("../Model/Student");
var readlineSync = require('readline-sync');
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.students = [];
    }
    StudentManager.prototype.addStudent = function () {
        var id = +readlineSync.question('Add Id: ');
        var fullname = readlineSync.question('Add Fullname: ');
        var birthday = readlineSync.question('Add Birthday: ');
        var adress = readlineSync.question('Add Adress: ');
        var gpa = readlineSync.question('Add Diem GPA: ');
        var student = new Student_1.Student(id, fullname, birthday, adress, gpa);
        this.students.push(student);
    };
    StudentManager.prototype.showList = function () {
        console.table(this.students);
    };
    StudentManager.prototype.deleteStudent = function () {
        var id = +readlineSync.question("Nhap id can xoa: ");
        while (true) {
            for (var i = 0; i < this.students.length; i++) {
                if (this.students[i].id == id) {
                    this.students.splice(i, 1);
                    return;
                }
            }
            console.log("ID khong ton tai, nhap lai");
            id = +readlineSync.question("Nhap id can xoa: ");
        }
    };
    StudentManager.prototype.updateStudent = function () {
        var id = +readlineSync.question("Nhap id can sua: ");
        while (true) {
            for (var i = 0; i < this.students.length; i++) {
                if (this.students[i].id == id) {
                    this.students[i].fullname = readlineSync.question("Sua fullname: ");
                    this.students[i].birthday = readlineSync.question("Sua birthday: ");
                    this.students[i].adress = readlineSync.question("Sua adress: ");
                    this.students[i].gpa = readlineSync.question("Sua gpa: ");
                    return;
                }
            }
            console.log("ID khong ton tai, nhap lai");
            id = +readlineSync.question("Nhap id can sua: ");
        }
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
