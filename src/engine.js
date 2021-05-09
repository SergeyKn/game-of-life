const x = 1;
const o = 0;

const count = (w, i, j) => {
  if (w[i])
    return w[i][j] ?? 0;
  return 0;
}

const getNeighbourCount = (w, i, j) => {
  return count(w, i - 1, j - 1) + count(w, i - 1, j) + count(w, i - 1, j + 1) +
    count(w, i, j - 1) + count(w, i, j + 1) +
    count(w, i + 1, j - 1) + count(w, i + 1, j) + count(w, i + 1, j + 1);
}

export default (world) => {
  return world.map((row, i) => {
    return row.map((cell, j) => {
      const n = getNeighbourCount(world, i, j);
      if (cell === x)
        return (n === 2 || n === 3) ? x : o;
      return n === 3 ? x : 0;
    });
  });
}
