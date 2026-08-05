/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of invocations) {
        graph[u].push(v);
    }

    // suspicious[i] = true if method i is reachable from k
    const suspicious = new Array(n).fill(false);

    // DFS
    function dfs(node) {
        suspicious[node] = true;

        for (const next of graph[node]) {
            if (!suspicious[next]) {
                dfs(next);
            }
        }
    }

    dfs(k);

    // Check if any non-suspicious method calls a suspicious one
    for (const [u, v] of invocations) {
        if (!suspicious[u] && suspicious[v]) {
            // Can't remove, return all methods
            return Array.from({ length: n }, (_, i) => i);
        }
    }

    // Return remaining (non-suspicious) methods
    const ans = [];

    for (let i = 0; i < n; i++) {
        if (!suspicious[i]) {
            ans.push(i);
        }
    }

    return ans;
};