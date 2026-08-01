/**
 * @param {string} s
 * @return {number}
 */
var countValidPrefixes = function(s) {
    let zero=0;
    let one=0;
    let ans=0;

    for(let ch of s){
        if(ch==='0')zero++;
        else one++;

        if(Math.abs(zero-one)<=1){
            ans++;
        }
    }
    return ans;
};