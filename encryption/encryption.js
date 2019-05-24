function encryption(s) {
  const stringLength = s.length;
  let encryptedText = '';

  let row = Math.floor(Math.sqrt(stringLength));
  let column = Math.ceil(Math.sqrt(stringLength));
  if (row * column < stringLength) row = column;

  for (let i = 0; i < column; i++) {
    for (let j = i; j < stringLength; j = j + column) {
      encryptedText += s.charAt(j);
    }
    encryptedText += ' ';
  }

  return encryptedText;
}
