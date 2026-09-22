/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
      let result = [];
    let current = 1;

    for (let i = 0; i < n; i++) {
        result.push(current);

        // Try to go deeper: 1 -> 10 -> 100
        if (current * 10 <= n) {
            current = current * 10;
        }
        // Otherwise, move to next sibling: 10 -> 11 -> 12
        else {
            while (current % 10 === 9 || current + 1 > n) {
                current = Math.floor(current / 10);
            }

            current++;
        }
    }

    return result;
};