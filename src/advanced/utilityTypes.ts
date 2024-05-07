{
  // Utility types

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  /** Pick */
  type NameAndAge = Pick<Person, "name" | "age">;

  /** Omit */
  type contactInfo = Omit<Person, "name" | "age">;

  /** Required */
  type requiredPerson = Required<Person>;

  /** Readonly */
  type readonlyPerson = Readonly<Person>;

  /** Partial */
  type PartialPerson = Partial<Person>;

  /** Record */
  type RecordPerson = Record<string, unknown>;
  const user = { name: "Sakib", age: 24 };
}
