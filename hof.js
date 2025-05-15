// HOFs - High Order Functions in JavaScript - These are functions that take other functions as arguments and/or return a function as a result. All HOFs do not change the original array. Most return a new array or a modified value.

// inline push(), sort(), includes() etc that take strings, numbers, arrays, objects as arguments and return a value

// 1. Map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (number) {
    return number * 2;
});

console.log(doubled);

// 2. Filter
// The filter() method creates a new array with all elements that pass the test implemented by the provided function

const numbers2 = [
    43, 26, 33, 42, 44, 50, 12, 56, 78, 90, 100, 101, 115, 411, 420, 11, 43,
];

// FILTER NUMBERS DIVISIBLE BY 3
const divisibleBy3 = numbers2.filter(function (number) {
    return number % 3 === 0;
});

console.log(divisibleBy3); // [ 33, 42, 90, 101, 411, 420 ]

// 3. Reduce
// The reduce() method applies a function against an accumulator and each element in the array to reduce it to a single value

const sum = numbers.reduce( function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);

// The function passed as an argument is called a callback function.

// reduce, sort, some, find, foreach, are other examples of HOFs
