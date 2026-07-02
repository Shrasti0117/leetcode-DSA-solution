/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    const m = grid.length;
    const n = grid[0].length;

    const dist = Array.from({ length: m }, () =>
        Array(n).fill(Infinity)
    );

    const deque = [];

    dist[0][0] = grid[0][0];
    deque.push([0, 0]);

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    while (deque.length) {
        const [x, y] = deque.shift();

        for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;

            if (
                nx < 0 || ny < 0 ||
                nx >= m || ny >= n
            ) continue;

            const newCost = dist[x][y] + grid[nx][ny];

            if (newCost < dist[nx][ny]) {
                dist[nx][ny] = newCost;

                if (grid[nx][ny] === 0) {
                    deque.unshift([nx, ny]);
                } else {
                    deque.push([nx, ny]);
                }
            }
        }
    }

    return health - dist[m - 1][n - 1] >= 1;
};