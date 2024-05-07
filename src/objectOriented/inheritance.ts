{
  // Inheritance
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    getTotalSleep(sleepHour: number) {
      console.log(`${this.name} sleeps ${sleepHour} hour in a day.`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number) {
      super(name, age);
    }
  }

  class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, designation: string) {
      super(name, age);
      this.designation = designation;
    }
    getTotalClass(totalClass: number) {
      console.log(`${this.name} takes ${totalClass} class in a day.`);
    }
  }

  const student1 = new Student("Sakib", 24);
  student1.getTotalSleep(5);

  const teacher1 = new Teacher("Yasin", 42, "Lecturer");
  teacher1.getTotalSleep(6);
  teacher1.getTotalClass(3);

  /**
   **
   **/
}
