function staircase(n) {
  const result = [];

  for (let i = 1; i < n + 1; i++) {
    result.push(' '.repeat(n - i) + '#'.repeat(i));
  }

  return result.join('\n');
}
