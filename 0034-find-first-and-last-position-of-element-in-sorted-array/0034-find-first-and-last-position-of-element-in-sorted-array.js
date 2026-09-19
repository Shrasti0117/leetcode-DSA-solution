/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
     let first = findFirst(nums, target);
    let last = findLast(nums, target);

    return [first, last];
}


function findFirst(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            ans = mid;
            high = mid - 1;     // search left
        }
        else if (nums[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }

    return ans;
}


function findLast(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            ans = mid;
            low = mid + 1;   
        }
        else if (nums[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }

    return ans;
};