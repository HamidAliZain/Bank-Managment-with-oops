import chalk from "chalk";
import inquirer from "inquirer";
let cond = true


let customer = await inquirer.prompt([
    {
        name: 'firstName',
        type: 'input',
        message: 'write your first name',
    },
    {
        name: 'lastName',
        type: 'input',
        message: 'write your last name',
    },
    {
        name: 'age',
        type: 'number',
        message: 'what is your age',
    },
    {
        name: 'number',
        type: 'number',
        message: 'what is your mobile number',
    },

])

let choice = await inquirer.prompt(

    {
        name: 'choice',
        type: 'list',
        choices: ['Check Balance', "Debit", 'Credit'],
        message: 'choose',
    },
)

if (customer.firstName == "") {
    console.log(chalk.red("please ernter your first name"));
}
else if (customer.lastName == "") {
    console.log(chalk.red("please ernter your last name"));
}
else if (isNaN(customer.age)) {
    console.log(chalk.red("please ernter your age"));
}
else if (isNaN(customer.number) || customer.number < 11) {
    console.log(chalk.red("please ernter your  number "));
}





class Customer {
    firstName: string
    lastName: string
    age: number
    mobileNumber: number
    constructor(firstName: string, lastName: string, age: number, number: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.mobileNumber = number
    }
}

class BankAccount {
    balance: number = 1000
    AccountBalance() {
        console.log(this.balance);
    }

    Debit(amount: number) {
        if (amount > 0) {
            if (amount > this.balance) {
                console.log(chalk.red("insuuficient balance"));
            } else {
                console.log(this.balance - amount)
            }
        } else {
            console.log(chalk.red("please enter amuont"));
        }
    }

    Credit(amount: number) {
        if (amount > 0) {
            if (amount > 100) {
                console.log(amount + this.balance - 1)
            } else {
                console.log(amount + this.balance)
            }
        } else {
            console.log(chalk.red("please enter amuont "));
        }

    }
}

const customerInfo = new Customer(customer.firstName, customer.lastName, customer.age, customer.number)
let card = new BankAccount()

if (choice.choice == "Check Balance") {
    console.log(card.AccountBalance());
} else if (choice.choice == "Debit") {
    let amount = await inquirer.prompt({
        name: "amount",
        type: 'number',
        message: 'enter amount'
    })
    console.log(card.Debit(amount.amount));
} else {
    let amount = await inquirer.prompt({
        name: "amount",
        type: 'number',
        message: 'enter amount'
    })
    console.log(card.Credit(amount.amount))
}


