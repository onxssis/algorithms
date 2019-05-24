function birthdayCakeCandles(ar) {
  const count = {};

  for (let num of ar) {
    count[num] = (count[num] || 0) + 1;
  }

  return Math.max(...Object.values(count));
}
