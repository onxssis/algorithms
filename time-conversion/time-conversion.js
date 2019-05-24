function timeConversion(s) {
  let AMPM = s.slice(-2);
  let time = s.slice(0, -2).split(':');

  if (AMPM === 'AM' && time[0] === '12') {
    time[0] = '00';
  } else if (AMPM === 'PM') {
    time[0] = (time[0] % 12) + 12;
  }

  return time.join(':');
}
