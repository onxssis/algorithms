function findDigits(n) {
  const digits = n.toFixed().split('');
  let counter = 0;

  for (const digit of digits) {
    if (n % digit === 0) {
      counter += 1;
    }
  }

  return counter;
}
