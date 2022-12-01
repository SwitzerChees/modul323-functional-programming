const person = {
  name: "Patrick",
};

// Impure
function changeName(newName) {
  person.name = newName;
  return person;
}

// Pure
function changeNamePure(person, newName) {
  return { ...person, name: newName };
}

console.log(person);
console.log(changeNamePure(person, "Max"));
console.log(person);
console.log(changeName('Max'));
console.log(person);
