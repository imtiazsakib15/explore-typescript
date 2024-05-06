{
  // Conditional Types
  type First = string;
  type Second = number;
  type Third = number | string;

  type Final = First extends Second ? boolean : null;
  type Last = First extends Third ? boolean : null;

  const final: Final = null; // As First is not in Second
  const last: Last = true; // As First is in Third

  //
  type Rich = {
    car: string;
    bike: string;
    plane: string;
  };
  type CheckVehicle<T> = T extends keyof Rich ? true : false;

  type RichMan = CheckVehicle<"plane">;
  const isRich: RichMan = true;
}
