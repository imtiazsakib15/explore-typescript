{
  // Type alias
  type UserName = string;
  type IsStudent = boolean;

  const userName: UserName = "Sakib";
  const isStudent: IsStudent = true;

  // Type alias in Object
  type Student = {
    name: string;
    email?: string;
    gpa: number;
  };

  const student1: Student = {
    name: "abc",
    email: "a@b.com",
    gpa: 3.5,
  };

  const student2: Student = {
    name: "def",
    gpa: 3.1,
  };

  // Type alias in Function
  type AddTwoNumber = (num1: number, num2: number) => number;

  const addTwoNumber: AddTwoNumber = (num1, num2) => num1 + num2;
}
