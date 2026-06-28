/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let p=0;
    let ans=0;
    for(let ch of s){
        if(ch==='(') p++;
        else if (ch===')')p--;
        ans=Math.max(ans,p);
    }
    return ans ;
};