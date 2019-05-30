function catAndMouse(x, y, z) {
  let distanceFromA = Math.abs(x - z);
  let distanceFromB = Math.abs(y - z);

  if (distanceFromA === distanceFromB) return 'Mouse C';
  else if (distanceFromA < distanceFromB) return 'Cat A';
  else return 'Cat B';
}
