/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let counts = {};
    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] in counts)
        {
            counts[numbers[i]]++;
        } 
        else
        {
            counts[numbers[i]] = 1;
        }
    }
    let greatest = 0;
    let num = 0;
    for (const key in counts)
    {
        if (counts[key] > greatest)
        {
            greatest = counts[key];
            num = key;
        }
    }
    return +num;
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};