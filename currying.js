const R = require("./rambda.min.js");

const studentGrades = [
  { name: "Joe", grade: 88 },
  { name: "Jen", grade: 94 },
  { name: "Steph", grade: 77 },
  { name: "Allen", grade: 60 },
  { name: "Gina", grade: 54 },
];

const getGradeLetter = (student) => {
  if (student.grade >= 90) return "A";
  if (student.grade >= 80) return "B";
  if (student.grade >= 70) return "C";
  if (student.grade >= 60) return "D";
  return "F";
};
const getPraise = (student) => {
  if (student.grade >= 90) return "Excellent Job";
  if (student.grade >= 80) return "Nice Job";
  if (student.grade >= 70) return "Well done";
  if (student.grade >= 60) return "What happened";
  return "Not good";
};
const rateStudent = (gradeLetter) => {
  return (praise) => {
    return (student) => {
      const studentPraise = `${praise(student)} ${student.name}`;
      return `${studentPraise}, you got an ${gradeLetter(student)}`;
    };
  };
};

studentFeedback = studentGrades.map(rateStudent(getGradeLetter)(getPraise));
console.log(studentFeedback);


const names = ["Peter", "Hans", "Manuel"];

const greeting = (greet) => {
  return (name) => {
    return `${greet} ${name}`;
  };
};
const greetingR = R.curry((greet, name) => {
  return `${greet} ${name}`;
});
const goodMorning = greeting("Good Morning");
const goodEvening = greetingR("Good Evening");
console.log(names.map(goodMorning));
console.log(names.map(goodEvening));
console.log(goodMorning("Michael"));


const sentence = "This is a sentence with some words";
const countWords = R.compose(R.length, R.split);

console.log(countWords(" ", sentence));
