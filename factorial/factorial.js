/* 
factorial of a non-negative integer n , denoted n!, is the
product of all positive integers less than or equal to it.
zero is 1.
factorial(4) = 4*3*2*1 = 24
*/

const factorial = (n) => {
  const mathSign = Math.sign(n);
  if (mathSign === 1) {
    let sum = 1;
    for (let i = 1; i <= n; i++) {
      sum *= i;
    }
    return sum;
  } else if (mathSign === 0) {
    return 1;
  } else {
    return "Can't do!";
  }
};

console.log(factorial(4)); // 24
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(-5)); // Can't do!
