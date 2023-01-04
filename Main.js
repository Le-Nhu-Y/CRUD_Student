"use strict";
exports.__esModule = true;
var StudentManager_1 = require("./Manager/StudentManager");
var AccountManager_1 = require("./Controller/AccountManager");
var readlineSync = require('readline-sync');
var studentManager = new StudentManager_1.StudentManager();
var exits = false;
var accountManager = new AccountManager_1.AccountManager();
var menu = function () {
    while (accountManager.isLoop) {
        console.log("1. Dang ky\n2. Dang nhap");
        var choice = readlineSync.question('Dang ky hay dang nhap? ');
        if (choice == 1) {
            accountManager.register();
        }
        else if (choice == 2) {
            accountManager.login();
        }
    }
    while (!exits) {
        console.log('1: Danh sach sinh vien');
        console.log('2: Them sinh vien');
        console.log('3: Chinh sua thong tin sinh vien');
        console.log('4: Xoa sinh vien');
        console.log('5: Thoat');
        var number = readlineSync.question('Nhap lua chon tinh nang: ');
        switch (number) {
            case "1":
                studentManager.showList();
                break;
            case "2":
                studentManager.addStudent();
                break;
            case "3":
                studentManager.updateStudent();
                break;
            case "4":
                studentManager.deleteStudent();
                break;
            default:
                exits = true;
        }
    }
};
menu();
