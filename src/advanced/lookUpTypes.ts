{
  // LookUp Types
  type Area = {
    width: number;
    height: number;
  };

  type Height = Area["height"];

  const height: Height = 999;
}
