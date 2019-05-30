function kangaroo(x1, v1, x2, v2) {
  // velocity = distance / time (jumps)
  if (v1 > v2) {
    const remainder = (x2 - x1) % (v1 - v2);

    if (remainder === 0) return 'YES';
    else return 'NO';
  }

  return 'NO';
}
