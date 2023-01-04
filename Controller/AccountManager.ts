let readlineSync = require('readline-sync');
import {Account} from "./Account";

export class AccountManager {
    isLoop = true
    account_list: Account[] = []

    register(): void {
        let username = readlineSync.question("Enter your username: ")
        let password = readlineSync.question("Enter your password: ")
        let account = new Account(username, password)
        this.account_list.push(account)
    }

    login(): string {
        let username = readlineSync.question("Enter your username: ")
        let password = readlineSync.question("Enter your password: ")
        for (let i of this.account_list) {
            if (username == i.username && password == i.password) {
                this.isLoop = false
                console.log(`Login successfully`)
                return
            }
        }
        console.log(`Wrong password or username`)
        return
    }
}