{
  // Instanceof
  class Student {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    sleep() {
      console.log(`${this.name} is sleeping!!!`);
    }
  }
  class SchoolStudent extends Student {
    constructor(name: string, age: number) {
      super(name, age);
    }
    goToSchool() {
      console.log(`${this.name} go to School!!!`);
    }
  }
  class UniversityStudent extends Student {
    constructor(name: string, age: number) {
      super(name, age);
    }
    goToUniversity() {
      console.log(`${this.name} go to University!!!`);
    }
  }

  const schoolStudent = new SchoolStudent("Abir", 16);
  const universityStudent = new UniversityStudent("Sakib", 24);

  //   const workOfStudent = (student: Student) => {
  //     if (student instanceof SchoolStudent) return student.goToSchool();
  //     if (student instanceof UniversityStudent) return student.goToUniversity();
  //     return student.sleep();
  //   };

  const isSchoolStudent = (student: Student): student is SchoolStudent =>
    student instanceof SchoolStudent;
  const isUniversityStudent = (
    student: Student
  ): student is UniversityStudent => student instanceof UniversityStudent;

  const workOfStudent = (student: Student): void => {
    if (isSchoolStudent(student)) student.goToSchool();
    else if (isUniversityStudent(student)) student.goToUniversity();
    else student.sleep();
  };

  workOfStudent(schoolStudent);
  workOfStudent(universityStudent);
}
