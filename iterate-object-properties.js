var objectUtil = function () {
    function toUpper(object, newObject) {
        Object.keys(object).forEach(function (key) {
            if(typeof object[key] === 'object'){
                toUpper(object[key], newObject[key] = {});
            }else if(typeof object[key] === 'string'){
                newObject[key] = object[key].toUpperCase();
            }else{
                newObject[key] = object[key];
            }
        });

        return newObject;
    }

    return {
        toUpper: toUpper
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

var util = objectUtil();

console.log(util.toUpper(person, {}));
