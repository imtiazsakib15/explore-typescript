{
  // Generic with function
  const createArrayWithGeneric = <T>(param1: T): T[] => [param1];

  const str = createArrayWithGeneric<string>("BD");
  const num = createArrayWithGeneric<number>(555);

  interface User {
    name: string;
    age: number;
  }
  const user = createArrayWithGeneric<User>({ name: "Sakib", age: 24 });

  // Create Tuple
  const createTuple = <X, Y>(param1: X, param2: Y): [X, Y] => [param1, param2];

  const obj = createTuple<string, number>("Sakib", 24);

  interface myLaptop {
    brand: string;
    model: string;
  }
  const myLaptop = createTuple<string, myLaptop>("Sakib", {
    brand: "HP",
    model: "ProBook 4540s",
  });

  // Generic with a fixed value
  const createStudentInstance = <T>(student: T): T & { dept: string } => {
    const dept: string = "CSE";
    return {
      ...student,
      dept,
    };
  };

  interface Student {
    name: string;
    age: number;
    cgpa?: number;
    isFailed?: boolean;
  }

  const student1 = createStudentInstance<Student>({
    name: "s1",
    age: 23,
    cgpa: 3.88,
  });
  const student2 = createStudentInstance<Student>({
    name: "s2",
    age: 33,
    isFailed: true,
  });

  console.log(student1);
  console.log(student2);
}
