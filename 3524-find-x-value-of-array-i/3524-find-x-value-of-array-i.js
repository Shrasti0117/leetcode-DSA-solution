/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function(nums, k) {
      let result = new Array(k).fill(0);

    // dp[r] = number of subarrays ending at previous index
    // whose product % k = r
    let dp = new Array(k).fill(0);

    for (let num of nums) {
        let newDp = new Array(k).fill(0);

        // Start a new subarray with just [num]
        let remainder = num % k;
        newDp[remainder]++;

        // Extend all previous subarrays
        for (let r = 0; r < k; r++) {
            if (dp[r] > 0) {
                let newRemainder = (r * remainder) % k;
                newDp[newRemainder] += dp[r];
            }
        }

        dp = newDp;

        // Add all subarrays ending at this position
        for (let r = 0; r < k; r++) {
            result[r] += dp[r];
        }
    }

    return result;
};