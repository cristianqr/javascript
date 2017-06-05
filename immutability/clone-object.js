var cloneUtility = function () {
    function withStringify(object) {
        return JSON.parse(JSON.stringify(object));
    }

    function withObjectAssign(object) {
        return Object.assign({}, object);
    }

    function withSpreadOperator(object) {
        return {...object};
    }

    return {
        withStringify: withStringify,
        withObjectAssign: withObjectAssign,
        withSpreadOperator: withSpreadOperator
    };
}
const person = {
    fullName: 'Cristian Quispe Ramirez',
    age: 30,
    birthDate: '10/01/1987',
    state: {
        stateId: 1,
        name: 'New York',
        country: {
            countryId: 20,
            name: 'Unit State'
        }
    }
};
var utility = cloneUtility();

var person1 = utility.withSpreadOperator(person);
person1.fullName = 'Andres Lopez';

console.log(person);
console.log(person1);