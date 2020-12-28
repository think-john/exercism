export const steps = (n, count = 0) => {

  if (n <= 0) throw 'Only positive numbers are allowed'

  while (n > 1) {
    if (n % 2 === 0 ) { 
      n = n / 2;
    } else {
      n = ( 3 * n ) + 1;
    }
    count++;
  }

  return count;
};