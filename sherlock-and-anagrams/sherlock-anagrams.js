function sherlockAndAnagrams(s) {
  let count = 0;

  // sliding window pattern
  for (let i = 1; i < s.length; i++) {
    let found = {};

    for (let j = 0; j + i <= s.length; j++) {
      let sbstr = s.substr(j, i);

      sbstr = sbstr
        .split('')
        .sort()
        .join('');

      if (found[sbstr]) {
        count += found[sbstr];
        found[sbstr]++;
      } else {
        found[sbstr] = 1;
      }
    }
  }

  return count;
}
