export function knightMoves(start, end) {
  const visited = new Set();
  const queue = [];
  if (start[0] === end[0] && start[1] === end[1]) {
    return [start];
  }

  const moves = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
  ];

  queue.push({ current: start, path: [start] });
  visited.add(start.toString());

  while (queue.length !== 0) {
    const currentSq = queue.shift();
    if (currentSq.current[0] === end[0] && currentSq.current[1] === end[1]) {
      return currentSq.path;
    } else {
      for (const [xMove, yMove] of moves) {
        const newX = currentSq.current[0] + xMove;
        const newY = currentSq.current[1] + yMove;
        if (newX < 0 || newX > 7 || newY < 0 || newY > 7) {
          continue;
        }
        const combined = `${newX},${newY}`;
        if (visited.has(combined)) {
          continue;
        }
        visited.add(combined);
        queue.push({
          current: [newX, newY],
          path: [...currentSq.path, [newX, newY]],
        });
      }
    }
  }

  return null;
}
