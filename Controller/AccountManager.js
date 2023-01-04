"use strict";
exports.__esModule = true;
exports.AccountManager = void 0;
var readlineSync = require('readline-sync');
var Account_1 = require("./Account");
var AccountManager = /** @class */ (function () {
    function AccountManager() {
        this.isLoop = true;
        this.account_list = [];
    }
    AccountManager.prototype.register = function () {
        var username = readlineSync.question("Enter your username: ");
        var password = readlineSync.question("Enter your password: ");
        var account = new Account_1.Account(username, password);
        this.account_list.push(account);
    };
    AccountManager.prototype.login = function () {
        var username = readlineSync.question("Enter your username: ");
        var password = readlineSync.question("Enter your password: ");
        for (var _i = 0, _a = this.account_list; _i < _a.length; _i++) {
            var i = _a[_i];
            if (username == i.username && password == i.password) {
                this.isLoop = false;
                console.log("Login successfully");
                return;
            }
        }
        console.log("Wrong password or username");
        return;
    };
    return AccountManager;
}());
exports.AccountManager = AccountManager;
