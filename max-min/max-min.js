function maxMin(k, arr) {
  let minUnfairness = Number.MAX_VALUE;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - k + 1; i++) {
    minUnfairness = Math.min(arr[i + k - 1] - arr[i], minUnfairness);
  }

  return minUnfairness;
}
