/*
Fibonacci Sequence
  : an integer in the infinite sequence 1, 1, 2, 3, 5, 8, 13, … of which
  the first two terms are 0 and 1 and each succeeding term
  is the sum of the two immediately preceding.
*/
const fibonacci = (n) => {
    const initials = [0, 1];
    for (let i = 2; i < n; i++) {
        initials[i] = initials[i - 2] + initials[i - 1];
        // initials[2] = initials[0](0) + initials[1](1) = 1
    }
    return initials;
};
console.log(fibonacci(2)); //[0, 1]
console.log(fibonacci(5)); //[0, 1, 1, 2, 3]
console.log(fibonacci(7)); //[0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci(10)); //[0, 1,  1,  2,  3, 5, 8, 13, 21, 34]
//BigO = Linear Time: O(n) 
// -> input size များတာနဲ့(ကြီးတာနဲ့) လုပ်ရတဲ့အကြောင်းအရေအတွက်ပါများလာ များ->များ
//# sourceMappingURL=fibonacci.js.map