{
  // Type Assertion
  let anything: any;
  anything = "name";
  (anything as string).toLowerCase();

  const kgToGm = (kg: string | number): string | number | undefined => {
    if (typeof kg === "number") return kg * 1000;
    if (typeof kg === "string") return `Gram = ${parseFloat(kg) * 1000}`;
  };

  const result1 = kgToGm(5) as number;
  const result2 = kgToGm("5 kg") as string;

  console.log(result1);
  console.log(result2);

  type Error = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as Error).message);
  }
}
