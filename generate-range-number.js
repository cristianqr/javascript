
function daysOfMonth(item, index) {
    return index + 1;
}

console.log(Array.apply(null, {length: 31}).map(daysOfMonth));

console.log(Array.from(Array(10).keys()).map(daysOfMonth));

console.log([...Array(10).keys()]);