/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

  Once you've implemented the logic, test your code by running
  - `npm run test-nonrepeat`
*/
function nonrepeat(str) {
  // Your code here
  let r  =  {}
  for(let l of str){
    r[l] = (r[l] || 0) + 1
  }
 
  
  for(let l of str){
    if (r[l] ===  1) return l
  }
  return null;
}
module.exports = nonrepeat;
