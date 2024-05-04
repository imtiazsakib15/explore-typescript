{
  // Generic types
  type GenericArray<T> = Array<T>;

  //   const numbers: Array<number> = [1, 2, 3];
  const numbers2: GenericArray<number> = [1, 2, 3];

  //   const strings: Array<string> = ["a", "b", "c"];
  const strings2: GenericArray<string> = ["a", "b", "c"];

  const arrayOfObject: GenericArray<{ name: string; age: number }> = [
    { name: "d", age: 5 },
    { name: "g", age: 7 },
  ];

  type Tuple<X, Y> = [X, Y];

  const tuple: Tuple<number, number> = [3, 4];
  const me: Tuple<string, { institute: string; dept: string }> = [
    "Sakib",
    { institute: "BIST", dept: "CSE" },
  ];
}
