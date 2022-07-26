function findMatches(array, ...nums) {
  const matches = [];

  for (const num of nums) {
    if (array.includes(num)) matches.push(num);
  }

  return matches;
}

findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
