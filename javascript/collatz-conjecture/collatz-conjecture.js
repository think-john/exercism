export const steps = (input) => {
  let currentNum = input;
  let count = 0;

  // Reject zero and negative values
  if (currentNum <= 0) {
    throw ('Only positive numbers are allowed');
  }

  // Perform operations until currentNum is 1
  while (currentNum > 1) {
    if (currentNum % 2 === 0 ) { // currentNum is even
      currentNum = currentNum / 2;
    } else { // currentNum is odd
      currentNum = ( 3 * currentNum ) + 1;
    }
    count++;
  }

  return count;
};