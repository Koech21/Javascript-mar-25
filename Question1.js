//**Question:**  
//Write a function `findPairsWithSum(arr, target)` that takes an array of numbers `arr` and a target sum `target`, and returns all unique pairs of numbers that sum to the target. If no pairs are found, return an empty array.



const prices= [10,20,30,40,50,60,70,80,90,100, 50, 60];
function findPairsWithSum(arr, target) {
    // This Set keeps track of numbers we've already seen while looping.
    const seen = new Set();

    // This Set stores unique stringified pairs.
    // Using Set ensures we don't count the same pair twice .(2,3) (3,2)
    const pairs = new Set();

    // This will store the final result: an array of unique number pairs. 
    const result = [];

    // Loop through each number in the input array
    for (const num of arr) {
        // Calculate the number we would need to pair with `num` to reach the target
        const complement = target - num;

        // If the complement exists in the seen set, a valid pair is found
        if (seen.has(complement)) {
            // Create a pair, sort it to avoid [2,3] and [3,2] being counted separately
            // Convert the pair to a string so it can be uniquely stored in a Set
            const pair = [num, complement].sort((a, b) => a - b).toString();

            // Add the stringified pair to the pairs Set (automatically avoids duplicates)
            pairs.add(pair);
        }

        // Mark the current number as seen so it can be used as a complement later
        seen.add(num);
    }

    // Convert each stringified pair back into an actual array of numbers
    for (const pair of pairs) {
        // Split the string by comma and convert back to numbers
        result.push(pair.split(',').map(Number));
    }

    // Return the final array of unique number pairs
    return result;

}
console.log(findPairsWithSum(prices, 100))
    