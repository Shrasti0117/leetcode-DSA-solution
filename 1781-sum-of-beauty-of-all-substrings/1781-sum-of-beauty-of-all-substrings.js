/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let ans = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        let freq = new Array(26).fill(0);

        for (let j = i; j < n; j++) {
            freq[s.charCodeAt(j) - 97]++;

            let maxFreq = 0;
            let minFreq = Infinity;

            for (let k = 0; k < 26; k++) {
                if (freq[k] > 0) {
                    maxFreq = Math.max(maxFreq, freq[k]);
                    minFreq = Math.min(minFreq, freq[k]);
                }
            }

            ans += maxFreq - minFreq;
        }
    }

    return ans;
};