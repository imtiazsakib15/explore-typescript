{
  const myName: string = "Sakib";

  console.log(myName);

  // Ternary vs Nullish Coalescing
  //   const isStudent = null;
  const isStudent = false;

  const ternaryResult = isStudent ? isStudent : "Unemployed";
  const nullishResult =
    isStudent ??
    "Unemployed"; /** If the value is null of undefined, then return the second option */

  console.log(ternaryResult);
  console.log(nullishResult);
}
