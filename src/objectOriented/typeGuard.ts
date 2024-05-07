{
  // Type Guard or Type Narrowing

  // Type guard using typeof operator

  type StringOrNumber = string | number;

  const add = (
    param1: StringOrNumber,
    param2: StringOrNumber
  ): StringOrNumber => {
    if (typeof param1 === "number" && typeof param2 === "number")
      return param1 + param2;
    else return param1.toString() + param2.toString();
  };

  console.log(add(3, 4));
  console.log(add("3", 4));

  // Type guard using in operator
  type User = {
    name: string;
  };
  type Admin = {
    name: string;
    role: "admin";
  };

  const user: User = {
    name: "User",
  };
  const admin: Admin = {
    name: "Admin",
    role: "admin",
  };

  const personInfo = (person: User | Admin) => {
    if ("role" in person)
      console.log(`My name is ${person.name} and I am an ${person.role}.`);
    else console.log(`My name is ${person.name}.`);
  };
  personInfo(user);
  personInfo(admin);
}
