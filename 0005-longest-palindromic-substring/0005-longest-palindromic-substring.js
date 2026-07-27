/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     if (s.length < 2) return s;

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        let len1 = expand(s, i, i);       // Odd length palindrome
        let len2 = expand(s, i, i + 1);   // Even length palindrome

        let len = Math.max(len1, len2);

        if (len > end - start + 1) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};

function expand(s, left, right) {
    while (
        left >= 0 &&
        right < s.length &&
        s[left] === s[right]
    ) {
        left--;
        right++;
    }

    return right - left - 1;
}
