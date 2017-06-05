var numbers = [1, 2, 3,4, 5];

function sum(numbers) {
    return numbers.reduce(function (sum, num) {
        return sum + num;
    });
}

console.log(sum(numbers));