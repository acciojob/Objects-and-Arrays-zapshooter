const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// 1. Store a reference to the players array
const team = players;

// 2. Create a copy of the players array
// Using the spread operator creates a new array with the same elements
const team1 = [...players];

// 3. Create a copy of the person object
// This ensures cap1 is a new object, not a reference to the original
const cap1 = { ...person };

// These lines are provided in your template to expose variables to the global scope
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;