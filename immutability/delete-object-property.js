var objectUtil = function () {
    function deleteKey(object, keyToDelete) {
        return Object.keys(object).reduce(function(obj, key){
            if(keyToDelete !== key){
                return Object.assign(obj, {[key]: object[key]});
            }
            return obj;
        }, {});
    }

    return {
        deleteKey: deleteKey
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

console.log(util.deleteKey(person, 'state'));