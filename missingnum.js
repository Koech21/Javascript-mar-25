// 5:  
// **Question:**  
// Write a function `findMissingNumber(nums)` that takes an array of numbers `nums` containing unique integers from 1 to n (inclusive) and returns the missing number in the sequence.
// [1,2,3,5,6,7,8]



function findMissingNumber(Pattern){
    const n = Pattern.length + 1;
    const expectedsum = (n*(n+1))/2;
    const actualsum = Pattern.reduce((a,b) => a+b,0);
    return expectedsum - actualsum;
}
let random=[1,2,3,4,6,7,8]
console.log(findMissingNumber(random));
 