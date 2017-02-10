export const greeting = 'Hello World';
export const characterAt = greeting.charAt(3);
export const greetingArray = greeting.split('');
export const begins = (str, char) => {
  return str[0] == char;
};
export const beginsInsensitive = (str, char) => {
  return str[0].toLowerCase() == char.toLowerCase();
};
