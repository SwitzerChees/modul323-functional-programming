const persons = [
  { id: 1, name: "Max" },
  { id: 2, name: "Manuel" },
];

const persons2 = [...persons, { id: 3, name: "Peter" }];
console.log(persons2);

const persons3 = persons2.map(changeName);
function changeName(person) {
  //   if (person.id !== 3) return person;
  //   return { ...person, name: "Peter2" };
  if (person.id === 3) {
    return { ...person, name: "Peter2" };
  }
  return person;
}
console.log(persons3);

const persons4 = persons3.filter((person) => person.id !== 1);
console.log(persons4);

const reviews = [
  4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0,
];

const sum = (total, addValue) => total + addValue;
const total = reviews.reduce(sum, 0);
const avgReviews = total / reviews.length;
console.log(avgReviews);

const groupReviews = (groups, digit) => {
  const { good = 0, ok = 0, bad = 0 } = groups;
  if (digit >= 4) return { ...groups, good: good + 1 };
  if (digit >= 2.5) return { ...groups, ok: ok + 1 };
  return { ...groups, bad: bad + 1 };
};

Array.prototype.myReduce = function (transformation, state) {
  const myArray = this;
  for (const element of myArray) {
    state = transformation(state, element);
  }
  return state;
};

const reviewGroups = reviews.reduce(groupReviews, {});
console.log(reviewGroups);

console.log(reviews.myReduce(groupReviews, {}));
