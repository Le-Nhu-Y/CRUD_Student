import {StudentManager} from "./Manager/StudentManager";

import {AccountManager} from "./Controller/AccountManager";

let readlineSync = require('readline-sync');

let studentManager = new StudentManager()

let exits: boolean = false;

let accountManager = new AccountManager()

const menu = () => {
    while (accountManager.isLoop) {
        console.log(`1. Dang ky
2. Dang nhap`)
        let choice = readlineSync.question('Dang ky hay dang nhap? ')
        if (choice == 1) {
            accountManager.register()
        } else if (choice == 2) {
            accountManager.login()
        }
    }
    while (!exits) {
        console.log('1: Danh sach sinh vien')
        console.log('2: Them sinh vien')
        console.log('3: Chinh sua thong tin sinh vien')
        console.log('4: Xoa sinh vien')
        console.log('5: Thoat')

        let number = readlineSync.question('Nhap lua chon tinh nang: ');
        switch (number) {
            case "1":
                studentManager.showList();
                break;
            case "2":
                studentManager.addStudent();
                break;
            case "3":
                studentManager.updateStudent()
                break;

            case "4":
                studentManager.deleteStudent();
                break;
            default:
                exits = true;
        }
    }
}
menu();



