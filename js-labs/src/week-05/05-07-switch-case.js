// using switch...case
function printMonth(n) {
  let month = '';
  switch (n) {
    case 1: {
      month = 'Jan';
      break;
    }
    case 2: {
      month = 'Feb';
      break;
    }
    case 3: {
      month = 'Mar';
      break;
    }
    // ... similar for month 4 -> 11
    case 12: {
      month = 'Dec';
      break;
    }
    default: {
      month = 'Invalid number';
    }
  }
  return month;
}
