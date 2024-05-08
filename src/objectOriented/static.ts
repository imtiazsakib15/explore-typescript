{
  // Static properties and methods of class
  class Counter {
    static count: number = 0;

    increment() {
      Counter.count += 1;
      return Counter.count;
    }
    static incrementStatic() {
      Counter.count += 1;
      return Counter.count;
    }
  }

  const counter1 = new Counter();
  console.log(counter1.increment());
  console.log(counter1.increment());

  const counter2 = new Counter();
  console.log(counter2.increment());
  console.log(counter2.increment());

  console.log(Counter.incrementStatic());
  console.log(Counter.incrementStatic());
  console.log(Counter.incrementStatic());
}
