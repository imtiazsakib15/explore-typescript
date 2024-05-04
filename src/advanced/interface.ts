{
  // interface
  interface User {
    name: string;
    age: number;
  }
  const user: User = {
    name: "Sakib",
    age: 24,
  };

  //Extend an interface
  interface RollBasedUser extends User {
    role: "Admin" | "User";
  }
  const rollBasedUser: RollBasedUser = {
    name: "Sakib",
    age: 24,
    role: "Admin",
  };

  // interface in array
  interface Students {
    [index: number]: string;
  }
  const students: Students = ["A", "B", "C"];

  // interface in function
  interface Add {
    (num1: number, num2: number): number;
  }
  const add: Add = (num1, num2) => num1 + num2;
}
