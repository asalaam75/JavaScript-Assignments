/*
  Write a function `reverseInteger` which takes an integer as input and returns the integer with its digits reversed. If the input is negative, the reversed integer should also be negative.

  What is reversing an integer?
  - Reversing an integer means rearranging its digits in the opposite order while maintaining its sign.

  Example:
  - Input: 123
  - Output: 321

  - Input: -456
  - Output: -654

  - Input: 100
  - Output: 1

  - Input: 0
  - Output: 0

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseInteger`
*/

function reverseInteger(num) {
  // Your code here
  number = 0;
  
  if (num <  0) multiple = -1;
  else multiple = 1;
  num = Math.abs(num)

  while (num !== 0){
    last_dig = num % 10;
    number = (number * 10) + last_dig;
    num = Math.trunc(num / 10) | 0;
  }
  return number * multiple;
}

module.exports = reverseInteger;
