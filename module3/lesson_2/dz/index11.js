function addOverNum(min, ...args) {
  let total = 0;

  for (const arg of args) {
    if (min < arg) total += arg;
  }

  return total;
}

addOverNum(1, 2, 3, 5, 67, 7);
