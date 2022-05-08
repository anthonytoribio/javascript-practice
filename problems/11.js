/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    let s = str.trim().replaceAll(" ", "").toLowerCase();
    let end = s.length - 1;
    for (let start = 0; start < Math.floor(s.length/2); start++)
    {
        if (s[start] != s[end])
        {
            return false;
        }
        end -= 1;
    }
    return true;
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};