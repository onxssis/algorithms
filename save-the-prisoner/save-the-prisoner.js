function saveThePrisoner(n, m, s) {
  const remainder = m % n;
  if ((remainder + s - 1) % n === 0) {
    return n;
  } else {
    return (remainder + s - 1) % n;
  }
}
