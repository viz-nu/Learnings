function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
    };

    this.withdraw = (amount) => {
        this.balance -= amount;
    };
}

const VizAccount = new BankAccount('Viz', 1000);
const RockyAccount = new BankAccount('Rocky Bhai');
VizAccount.deposit(5000);
RockyAccount.deposit(1000);
VizAccount.withdraw(2000);

console.log(VizAccount, RockyAccount);