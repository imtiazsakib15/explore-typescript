{
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  add(2, 3);
  addArrow(4, 6);

  const anyUser: {
    name: string;
    balance: number;
    addBalance: any;
  } = {
    name: "abc",
    balance: 111,
    addBalance(extra: number): string {
      return `The new balance of ${this.name + extra}`;
    },
  };
}
