var arrayUtil = function () {
    function first(array) {
        return array.slice(0, 1);
    }

    function last(array) {
        return array.slice(-1, array.length);
    }

    function lessFirst(array) {
        return array.slice(1);
    }

    function lessLast(array) {
        return array.slice(0, -1);
    }

    function without(array, index) {
        return array.slice(0, index).concat(array.slice(index + 1));
    }

    return {
        first: first,
        last: last,
        lessFirst: lessFirst,
        lessLast: lessLast,
        without: without
    };
}

var util = arrayUtil();

var data = ['0', 'A', 'B', 'C', 'D', 'E', 'F'];

console.log(util.first(data));
console.log(util.last(data));
console.log(util.lessFirst(data));
console.log(util.lessLast(data));
console.log(util.without(data, 1));
