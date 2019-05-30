function kangaroo(x1, v1, x2, v2) {
  if (v1 > v2) {
    const r = (x2 - x1) % (v1 - v2);

    if (r === 0) return 'YES';
    else return 'NO';
  }

  return 'NO';
}
