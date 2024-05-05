{
  // Constraint with key of
  interface Vehicle {
    bike: string;
    car: string;
    bus: string;
  }
  type Owner = "bike" | "car" | "bus";
  type Owner2 = keyof Vehicle;

  // Get Property Value from object
  interface User {
    name: string;
    age: number;
  }
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => obj[key];

  const myInfo: User = { name: "Sakib", age: 24 };

  const myName = getPropertyValue(myInfo, "name");
  console.log(myName);

  interface Car {
    brand: string;
    releaseYear: number;
  }
  const myCar = {
    brand: "Tesla",
    releaseYear: 2022,
  };
  const myCarBrand = getPropertyValue(myCar, "brand");
  console.log(myCarBrand);
}
