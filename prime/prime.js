/*
natural number greater than 1 that is not a product of two smaller natural
numbers
isPrime(5) = true (1*5 or 5*1)
isPrime(4) = false (1*4 or 2*2 or 4*1)

---- Math.sqrt(n) Explanation ----
integers larger than the square root do not need to be checked cuz,
whenever 'n=a*b', one of the two factors 'a' and 'b' is less than or equal to
the square root of 'n'.
ex. n=24, a=4 and b=6
sqrt of 24 is 4.89 -> 4 < 4.89 -> a < sqrt of n
*/
var isPrime = function (n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
console.log(isPrime(1)); //false
console.log(isPrime(4)); //false
console.log(isPrime(5)); //true
console.log(isPrime(8)); //false
console.log(isPrime(7)); //true
