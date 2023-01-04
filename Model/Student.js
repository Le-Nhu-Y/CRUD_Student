"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(id, fullname, birthday, adress, gpa) {
        this.id = id;
        this.fullname = fullname;
        this.birthday = birthday;
        this.adress = adress;
        this.gpa = gpa;
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getFullname = function () {
        return this.fullname;
    };
    Student.prototype.getBirthday = function () {
        return this.birthday;
    };
    Student.prototype.getAdress = function () {
        return this.adress;
    };
    Student.prototype.getGpa = function () {
        return this.gpa;
    };
    return Student;
}());
exports.Student = Student;
