/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    // Always binary search on the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length;
    let n = nums2.length;

    let low = 0;
    let high = m;

    while (low <= high) {

        let cut1 = Math.floor((low + high) / 2);

        // Total elements on left side
        let cut2 = Math.floor((m + n + 1) / 2) - cut1;

        let left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
        let right1 = cut1 === m ? Infinity : nums1[cut1];

        let left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
        let right2 = cut2 === n ? Infinity : nums2[cut2];

        // Correct partition
        if (left1 <= right2 && left2 <= right1) {

            // Odd total length
            if ((m + n) % 2 === 1) {
                return Math.max(left1, left2);
            }

            // Even total length
            return (
                Math.max(left1, left2) +
                Math.min(right1, right2)
            ) / 2;
        }

        // Move left
        if (left1 > right2) {
            high = cut1 - 1;
        }

        // Move right
        else {
            low = cut1 + 1;
        }
    }
};