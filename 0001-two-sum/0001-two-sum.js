/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
       let map = {}; // store number → index

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }
};