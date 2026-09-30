/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
     let freq = new Map();
    for (let num of nums) {
        if (num % 2 === 0) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }
    }
    let ans = -1;
    let maxFreq = 0;
    for (let [num, count] of freq) {
        if (count > maxFreq || 
           (count === maxFreq && num < ans)) {
            maxFreq = count;
            ans = num;
        }
    }

    return ans;
};