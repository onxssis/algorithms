function diagonalDifference(arr) {
  let d1 = 0,
    d2 = 0;

  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    d1 += arr[i][i];
    d2 += arr[j][i];
    j--;
  }

  return Math.abs(d1 - d2);
}
