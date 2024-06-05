"use strict";
//class
class Bankaccount {
    constructor(accountbalance) {
        this.accountbalance = accountbalance;
    }
    //publicallly credit
    credit(amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("Credit sucessfully get into new account and your balance is :" + this.accountbalance);
        }
        else {
            console.log("credit unsucessful");
        }
    }
    //publically debit
    debit(amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("debit sucessfully share in new account balance:" + this.accountbalance);
        }
        else {
            console.log("debit uncessfully");
        }
    }
}
//customer details 
class Customer {
    constructor(person, age, gender, mobile_number, bankaccount) {
        //this property utilization
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    //piblically user acess
    display() {
        console.log("Name: " + this.person.firstname + "" + this.person.lastname);
        console.log("Age:" + this.age);
        console.log("Gender:" + this.gender);
        console.log("Mobile Number:" + this.mobile_number);
        console.log("Amount In Bank: " + this.bankaccount.accountbalance);
        console.log();
    }
}
const a1 = new Bankaccount(80000);
const c1 = new Customer({ firstname: "nameera", lastname: "azam" }, 19, "female", 9823679659, a1);
c1.display();
c1.bankaccount.debit(500);
console.log();
const a2 = new Bankaccount(80000);
const c2 = new Customer({ firstname: "nameera", lastname: "azam" }, 19, "female", 9823679659, a1);
c1.display();
c1.bankaccount.debit(500);
console.log();
