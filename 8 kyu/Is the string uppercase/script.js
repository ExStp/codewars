// Task
// Create a method to see whether the string is ALL CAPS.

function isUpperCase(string) {
    return (string <= string.toUpperCase()) ? true : false;
}

console.log(isUpperCase('HELLO'));