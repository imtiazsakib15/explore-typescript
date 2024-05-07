{
  // Access Modifier
  class Account {
    readonly id: string;
    name: string;
    // private _balance: number;
    protected _balance: number;
    constructor(id: string, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    getBalance() {
      return this._balance;
    }
    cashIn(amount: number) {
      this._balance += amount;
    }
    cashOut(amount: number) {
      this._balance -= amount + amount * 0.01;
    }
  }

  const myAccount = new Account("901", "Sakib", 500);

  let myBalance = myAccount.getBalance();
  console.log(myBalance);

  myAccount.cashIn(200);

  myBalance = myAccount.getBalance();
  console.log(myBalance);

  myAccount.cashOut(400);

  myBalance = myAccount.getBalance();
  console.log(myBalance);

  class StudentAccount extends Account {
    constructor(id: string, name: string, _balance: number) {
      super(id, name, _balance);
    }
    cashOutStudent(amount: number) {
      this._balance -= amount;
    }
  }
}
