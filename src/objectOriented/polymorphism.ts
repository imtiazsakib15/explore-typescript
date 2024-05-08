{
  // Polymorphism
  class Person {
    getSleep() {
      return "A person sleeps 8 hour a day!!!";
    }
  }
  class Student extends Person {
    getSleep() {
      return "A student sleeps 6 hour a day!!!";
    }
  }
  const getSleepingTime = (param: Person): void => {
    console.log(param.getSleep());
  };
  const person = new Person();
  const student = new Student();

  //   person.getSleep();
  //   student.getSleep();
  getSleepingTime(person);
  getSleepingTime(student);

  // Another example of Polymorphism

  class Shape {
    getArea() {
      console.log(`Area of shape = ${0}`);
    }
  }
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea() {
      const area = 3.1416 * this.radius * this.radius;
      console.log(`Area of circle = ${area}`);
    }
  }
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea() {
      const area = this.height * this.width;
      console.log(`Area of rectangle = ${area}`);
    }
  }
  const shape = new Shape();
  const circle = new Circle(10);
  const rectangle = new Rectangle(5, 10);

  shape.getArea();
  circle.getArea();
  rectangle.getArea();
}
