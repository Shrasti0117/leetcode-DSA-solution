/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i=0;
   while(i < s.length && s[i] === ' ') i++;
    let sign=1;
    if((i < s.length && s[i] === '+') || s[i] === '-'){
        sign=s[i]==='-'?-1:1;
        i++;
    }
    return helper(s,i,0,sign);
};
function helper(s,i,num,sign){
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    if(i>=s.length||s[i] < '0' || s[i] > '9')
    return sign*num;
    num=num*10+Number(s[i]);

    if(sign*num <= INT_MIN) return INT_MIN;
    if(sign*num >= INT_MAX) return INT_MAX;

    return helper(s,i+1,num,sign);
}