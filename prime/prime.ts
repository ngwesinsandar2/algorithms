/*
natural number greater than 1 that is not a product of two smaller natural
numbers
isPrime(5) = true (1*5 or 5*1)
isPrime(4) = false (1*4 or 2*2 or 4*1)
*/

const isPrime = (n: number) => {
  if (n === 0 || n === 1) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      return n % i === 0 ? false : true;
    }
  }
};

console.log(isPrime(1)); //false
console.log(isPrime(2)); //true
console.log(isPrime(3)); //true
console.log(isPrime(8)); //false
