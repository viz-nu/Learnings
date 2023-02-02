
//oops 1/6 __________________________________________________________________________________________________________________________________________________
//constructor function
// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;

//     this.deposit = function (amount) {
//         this.balance =this.balance*1 + amount*1 ;
//     };

//     this.withdraw = (amount) => {
//         this.balance =this.balance*1 - amount*1 ;
//     };
// }
// const accountForm=document.querySelector("#accountForm")
// const customerName=document.querySelector("#customerName")
// const balance=document.querySelector("#balance")
// let accounts=[]
// const DepositForm=document.querySelector("#DepositForm")
// const accountNumber=document.querySelector("#depoaccountNumber")
// const Amount=document.querySelector("#depoAmount")

// accountForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const account = new BankAccount(customerName.value, balance.value);
//     accounts.push(account)
//     console.log(accounts);
// })
// DepositForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//    const target_account = accounts.find((acc)=>acc.accountNumber == accountNumber.value)
//    target_account.deposit(+Amount.value)
//     console.log(accounts);
// })
// const withdrawForm=document.querySelector("#withdrawForm")
// const waccountNumber=document.querySelector("#withaccountNumber")
// const wAmount=document.querySelector("#withAmount")
// withdrawForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//    const target_account = accounts.find((acc)=>acc.accountNumber == waccountNumber.value)
//    target_account.withdraw(+wAmount.value)
//     console.log(accounts);
// })
// console.log(accounts);


//oops2/6 prototype___________________________________________________________________________________________________________________________________________
// problem=>each object is having copy of methods that can be generalied outside constructor function


// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }
// // console.log(BankAccount.prototype);
// BankAccount.prototype.deposit = function (amount) {
//     this.balance =this.balance*1 + amount*1 ;
// };
// BankAccount.prototype.withdraw = function (amount) {
//     this.balance =this.balance*1 - amount*1 ;
// };
// console.log(Array.prototype,Object.prototype);


// oops 3/6 class _______________________________________________________________________________________________________________________________________________

// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }
// // console.log(BankAccount.prototype);
// BankAccount.prototype.deposit = function (amount) {
//     this.balance =this.balance*1 + amount*1 ;
// };
// BankAccount.prototype.withdraw = function (amount) {
//     this.balance =this.balance*1 - amount*1 ;
// };

// this is converted into class style 

// class BankAccount {
//     customerName;
//     accountNumber;
//     balance = 0;
//     constructor(customerName, balance = 0) {
//         this.customerName = customerName;
//         this.accountNumber = Date.now();
//         this.balance = balance;
//     }
//     deposit (amount) {
//         this.balance =this.balance*1 + amount*1 ;
//     };

//     withdraw(amount) {
//         this.balance =this.balance*1 - amount*1 ;
//     };
// }

// const viz = new BankAccount("viz", 1000) 
// console.log(viz)


// oops 4/6 Inheritance _______________________________________________________________________________________________________________________________________________
// DRY-- donot repeat yourself
// we can inherit methods of class from parents 


// function savingsBankAccount(customerName, balance = 0) {

//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//     this.transationLimit = 10000;
// }
// savingsAccount.prototype.takePersonalLoan = function (amount) {
//     console.log("taking personal loan :", amount);
// };
// savingsAccount.prototype.deposit = function (amount) {
//     this.balance = this.balance * 1 + amount * 1;
// };
// savingsAccount.prototype.withdraw = function (amount) {
//     this.balance = this.balance * 1 - amount * 1;
// };
// function CurrentAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//     this.transationLimit = 50000;
// }

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//     console.log("taking business loan :", amount);
// };
// CurrentAccount.prototype.deposit = function (amount) {
//     this.balance = this.balance * 1 + amount * 1;
// };
// CurrentAccount.prototype.withdraw = function (amount) {
//     this.balance = this.balance * 1 - amount * 1;
// };

// const viz = new CurrentAccount("viz", 1000)
// console.log(viz)




// simpler version of above code is .....


// function BankAccount(customerName, balance ) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }
// BankAccount.prototype.deposit = function (amount) {
//     this.balance =this.balance*1 + amount*1 ;
// };
// BankAccount.prototype.withdraw = function (amount) {
//     this.balance =this.balance*1 - amount*1 ;
// };

// function savingsAccount(customerName, balance=0 ) {
// BankAccount.call(this,customerName, balance )
//     this.transationLimit = 10000;
// }
// savingsAccount.prototype=Object.create(BankAccount.prototype)   //.......................................................................................................
// savingsAccount.prototype.takePersonalLoan = function (amount) {
//     console.log("taking personal loan :", amount);
// };

// function CurrentAccount(customerName, balance=0 ) {
//     BankAccount.call(this,customerName, balance )
//     this.transationLimit = 50000;
// }
// CurrentAccount.prototype=Object.create(BankAccount.prototype)    //.......................................................................................................
// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//     console.log("taking business loan :", amount);
// };
// const viz = new CurrentAccount("viz",1000)
// viz.deposit(1000)
// console.log(viz)


// same in class //......................
// class BankAccount {
//     customerName;
//     accountNumber;
//     balance;
//     constructor(customerName, balance) {
//         this.customerName = customerName;
//         this.accountNumber = Date.now();
//         this.balance = balance;
//     }
//     deposit(amount) {
//         this.balance = this.balance * 1 + amount * 1;
//     };

//     withdraw(amount) {
//         this.balance = this.balance * 1 - amount * 1;
//     };
// }
// class SavingsAccount extends BankAccount {
//     transationLimit = 10000;
//     constructor(customerName, balance=0) {
//         super(customerName, balance)
//     }
//     takePersonalLoan = function (amount) {
//         console.log("taking personal loan :", amount);
//     };


// }
// class CurrentAccount extends BankAccount {
//     transationLimit = 50000;
//     constructor(customerName, balance=0) {
//         super(customerName, balance)
//     }

//     takeBusinessLoan = function (amount) {
//         console.log("taking business loan :", amount);
//     };

// }

// const viz = new CurrentAccount("viz", 1000)
// viz.takeBusinessLoan(1000)


// 5/6 Encapsulation _________________________________________________________________________________________________________________________________________________________________

// hiding all private fields, making it unavailable for user 
//problem - here balance can be modefied from anywhere...
//viz.balance=5000 makes balance 5000 which can be dangerous


// class BankAccount {
//     customerName;
//     accountNumber;
//     #balance=0;
//     constructor(customerName, balance) {
//         this.customerName = customerName;
//         this.accountNumber = Date.now();
//         this.#balance = balance;
//     }
//     deposit(amount) {
//         this.#balance = this.#balance * 1 + amount * 1;
//     };

//     withdraw(amount) {
//         this.#balance = this.#balance * 1 - amount * 1;
//     };
//     setBalance(amount){
//         if(isNaN(amount)){//..................................................................
//             throw new Error("amount not a number")
//         }
//         this.#balance=amount
//     }
//     get balance(){    //.................................................................
//         return this.#balance
//     }
// }
// class SavingsAccount extends BankAccount {
//     transationLimit = 10000;
//     constructor(customerName, balance=0) {
//         super(customerName, balance)
//     }
//     takePersonalLoan = function (amount) {
//         console.log("taking personal loan :", amount);
//     };


// }
// class CurrentAccount extends BankAccount {
//     transationLimit = 50000;
//     constructor(customerName, balance=0) {
//         super(customerName, balance)
//     }

//     takeBusinessLoan = function (amount) {
//         console.log("taking business loan :", amount);
//     };

// }

// const viz = new CurrentAccount("viz", 5000)
// viz.balance=10

// console.log(viz.balance)
 

// 5/6 Static properties and methods _________________________________________________________________________________________________________________________________________________________________


// class User{
//     static id=1;
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         this.id=User.id++;
//     }
//     static compareByAge(a,b){
//         return a.age-b.age
//     }
// }

// const user1= new User("vizz",23)
// const user2= new User("tara",24)
// const user3= new User("jyo",19)
// let users=[]
// users.push(user1,user2,user3);

// users.sort(User.compareByAge)


// console.log(users);