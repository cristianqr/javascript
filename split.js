var alphabet = 'ABCDEF';
var numbers = '1,2,3,4,5';
var helloWorld = 'Hello world!';
var emptyText = '';
var specialCharacter = 'examples with, regular; expresions; perfecto!';

console.log(alphabet.split(""));
console.log(numbers.split(",").map(Number));
console.log(JSON.parse("[" + numbers + "]"));
console.log(helloWorld.split(" "));
console.log(helloWorld.split());
console.log(helloWorld.split(""));
console.log(helloWorld.split(" ", 1));
console.log(helloWorld.split("o"));
console.log(emptyText.split());
console.log(specialCharacter.split(/[\s,;]/));