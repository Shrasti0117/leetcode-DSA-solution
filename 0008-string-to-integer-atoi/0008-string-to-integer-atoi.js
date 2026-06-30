/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let n = s.length;
    
    // 1. Skip leading spaces
    while (i < n && s[i] === ' ') i++;
    
    // 2. Handle sign
    let sign = 1;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        if (s[i] === '-') sign = -1;
        i++;
    }
    
    // 3. Convert digits
    let result = 0;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';
        
        // 4. Handle overflow
        if (result > Math.floor(2147483647 / 10) || 
           (result === Math.floor(2147483647 / 10) && digit > 7)) {
            return sign === 1 ? 2147483647 : -2147483648;
        }
        
        result = result * 10 + digit;
        i++;
    }
    
    return result * sign;
};