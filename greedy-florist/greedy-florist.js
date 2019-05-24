function getMinimumCost(k, c) {
  let minimumCost = 0,
    previousPurchases = 0;

  // sort in desc
  c.sort((a, b) => b - a);

  for (let i = 1; i <= c.length; i++) {
    minimumCost += (1 + previousPurchases) * c[i - 1];

    if (i % k === 0) {
      previousPurchases++;
    }
  }

  return minimumCost;
}
