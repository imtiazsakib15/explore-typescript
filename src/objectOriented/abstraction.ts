{
  // Abstraction

  // Abstraction using interface
  interface Vehicle1 {
    start(): void;
    stop(): void;
    move(): void;
  }

  class Car1 implements Vehicle1 {
    start(): void {
      console.log("Start!!!");
    }
    stop(): void {
      console.log("Stop!!!");
    }
    move(): void {
      console.log("Move!!!");
    }
  }
  const car1 = new Car1();
  car1.start();
  car1.stop();

  // Abstraction using class
  abstract class Vehicle2 {
    abstract start(): void;
    abstract stop(): void;
    abstract move(): void;
  }
  class Car2 extends Vehicle2 {
    start(): void {
      console.log("Start!!!");
    }
    stop(): void {
      console.log("Stop!!!");
    }
    move(): void {
      console.log("Move!!!");
    }
  }
  const car2 = new Car2();
  car2.start();
  car2.move();
  car2.stop();

  /**
   **
   **/
}
