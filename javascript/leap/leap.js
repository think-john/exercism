export const isLeap = (year) => {
  return ( 
    year % 100 === 0 ? // years divisible by 100 are only a leap year...
    year % 400 === 0 : // ...if they are also divisible by 400.
    year %   4 === 0   // otherwise, years are only leap if divisible by 4.
    );
}