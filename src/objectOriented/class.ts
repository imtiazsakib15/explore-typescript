{
  // Class in Object Oriented Programming
  /* 
    class Student {
    constructor(public name: string, public roll: number) {}
    intro() {
      console.log(`My name is ${this.name}. My roll is ${this.roll}.`);
    }
  }

  const student1 = new Student("abcd", 1);

  student1.intro();
  */

  class Student {
    name: string;
    roll: number;

    constructor(name: string, roll: number) {
      this.name = name;
      this.roll = roll;
    }
    intro() {
      console.log(`My name is ${this.name}. My roll is ${this.roll}.`);
    }
  }

  const student1 = new Student("efgh", 2);

  student1.intro();

  /**
   **
   **/
}
