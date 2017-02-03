// Setup variables and constants
export var message = 'hello';
export let greeting = 'Yo!';
export const saying = 'What up?';

// Reassign variables
message = 'world';
greeting = 'hello';

// This line will throw an error, as a const is immutable
// saying = 'Booyah';