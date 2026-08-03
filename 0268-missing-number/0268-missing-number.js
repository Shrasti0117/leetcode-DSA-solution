/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b);

    let left=0;
    let right=nums.length;

    while(left<right){
        const mid=Math.floor((left+right)/2);

        if(nums[mid]===mid){
    left =mid+1;
        }else{
            right=mid;
        }
    }
    return left;
};