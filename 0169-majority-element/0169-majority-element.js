/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count =0;
    let key=null;
    for(let x of nums){
        if(count===0){
            key=x;
        }
     count+=(x===key)?1:-1;
    }
    return key;
};