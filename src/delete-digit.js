const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  var result = 0,
        num_digits = [];
    while (n) {
        num_digits.push(n % 10);
        n = Math.floor(n / 10);
    }
    for (var index_num = 0; index_num < num_digits.length; index_num++) {
        var n = 0;
        for (var i = num_digits.length - 1; i >= 0; i--) {
            if (i !== index_num) {
                n = n * 10 + num_digits[i];
            }
        }
        result = Math.max(n, result);
    }
    return result;
}// remove line with error and write your code here


module.exports = {
  deleteDigit
};
