{
  // Generic with interface
  interface User<C, B = null> {
    name: string;
    computer: C;
    Bike?: B;
  }
  interface User1Computer {
    brand: string;
  }
  interface User2Computer {
    brand: string;
    releaseYear: number;
  }
  interface User2Bike {
    brand: string;
    releaseYear: number;
    engineCapacity: string;
  }

  const user1: User<User1Computer> = {
    name: "Sakib",
    computer: {
      brand: "HP",
    },
  };

  const user2: User<User2Computer, User2Bike> = {
    name: "Anonymous",
    computer: {
      brand: "Dell",
      releaseYear: 2020,
    },
    Bike: {
      brand: "Hero",
      releaseYear: 2010,
      engineCapacity: "140 CC",
    },
  };
}
