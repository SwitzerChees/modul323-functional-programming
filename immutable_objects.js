const PI = 3.141592653589793;

const person = {
  firstName: "Patrick",
  age: 29,
};
console.log(person);

const person2 = {
  ...person,
  lastName: "Michel",
};
console.log(person2);

const person3 = {
  ...person2,
  age: person2.age * 10,
};
console.log(person3);

const { age, ...person4 } = person3;
console.log(age)
console.log(person4)
