/**
 * Example One
 * */
var numbers = [1,4,9];

function multiplyArrayElement(numbers) {
    return numbers.map(function (num) {
        return num * num;
    });
}
console.log(multiplyArrayElement(numbers));
console.log(numbers.map(Math.sqrt));
console.log(Math.sqrt(9));

/**
 * Example two
 * */
var people = [
    {age: 30, firstName: 'Cristian', lastName: 'Quispe Ramirez'},
    {age: 50, firstName: 'Linus', lastName: 'Torvalds'},
];

function getFullName(item) {
    return [item.firstName, item.lastName].join(' ');
}

function customMap(arrayData, functionName) {
    var newArray = [];
    arrayData.forEach(function(item){
        newArray.push(functionName(item));
    });

    return newArray;
}

console.log(people.map(getFullName));
console.log(customMap(people, getFullName));

/**
 * Example Three
 * */
function getCharCode(char) {
    return char.charCodeAt(0);
}

var map = Array.prototype.map;
var codes = map.call('@CRISTIAN', getCharCode);

console.log(codes);


/**
 * Example Four
 * */
var numbers = '12345';
var reversNumbers = [].map.call(numbers, function (char) {
    return char;
}).reverse().join('');

console.log(reversNumbers);

/**
 * Example Five
 * */
var alphabet = 'ABCDEF';
function alphabelInArray(char) {
    return char;
}

console.log(Array.prototype.map.call(alphabet, alphabelInArray));

/**
 * Example Six
 * */

function daysOfMonth(item, index) {
    return index + 1;
}

console.log(Array(31).map(daysOfMonth));