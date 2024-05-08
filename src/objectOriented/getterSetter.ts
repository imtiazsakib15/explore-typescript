{
  // Getter and Setter
  class Account {
    readonly id: string;
    name: string;
    private _balance: number;
    constructor(id: string, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    get balance(): number {
      return this._balance;
    }
    set deposit(amount: number) {
      this._balance += amount;
    }
  }

  const myAccount = new Account("901", "Sakib", 500);

  let myBalance = myAccount.balance;
  console.log(myBalance);

  myAccount.deposit = 300;

  myBalance = myAccount.balance;
  console.log(myBalance);
}
