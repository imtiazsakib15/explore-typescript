{
  // Type using Union
  type Developer = "Frontend" | "Backend";
  type Engineer = "Problem Solver" | "Full Stack";
  type JobHolder = Engineer | Developer;

  const developer: Developer = "Frontend";
  const engineer: Engineer = "Problem Solver";

  const jobHolder: JobHolder = "Full Stack";

  //   Type using Intersection
  type Frontend = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type Backend = {
    skills: string[];
    designation2: "Backend Developer";
  };
  type FullStack = Frontend & Backend;
  const fullStack: FullStack = {
    skills: ["HTML", "CSS", "JS", "REACT", "NODE"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
