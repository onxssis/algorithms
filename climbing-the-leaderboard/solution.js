function climbingLeaderboard(scores, alice) {
  const ranks = [];
  const aliceRanks = [];

  ranks[0] = 1;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] === scores[i - 1]) {
      ranks[i] = ranks[i - 1];
    } else {
      ranks[i] = ranks[i - 1] + 1;
    }
  }

  for (let i = 0; i < alice.length; i++) {
    const aliceScore = alice[i];

    if (aliceScore > scores[0]) aliceRanks[i] = 1;
    else if (aliceScore < scores[scores.length - 1]) {
      aliceRanks[i] = ranks[scores.length - 1] + 1;
    } else {
      const index = search(aliceScore, scores);
      aliceRanks[i] = ranks[index];
    }
  }

  return aliceRanks;
}

function search(key, arr) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === key) return middle;
    else if (arr[middle] < key && key < arr[middle - 1]) return middle;
    else if (arr[middle] > key && key >= arr[middle + 1]) return middle + 1;
    else if (arr[middle] < key) end = middle - 1;
    else if (arr[middle] > key) start = middle + 1;
  }
  return false;
}
