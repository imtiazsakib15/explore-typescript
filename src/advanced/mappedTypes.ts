{
  // Mapped Types
  type AreaNumbder = {
    width: number;
    height: number;
  };
  type AreaString = {
    [key in keyof AreaNumbder]: string;
  };

  type AreaCustom<T> = {
    [key in keyof T]: T[key];
  };

  const areaCustom: AreaCustom<{ width: string; height: number }> = {
    width: "e",
    height: 3,
  };
}
