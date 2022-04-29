const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
  let levels = 0;
  // previous length
  let prev_length = 0;
  // current length
  let curr_length = arr.length;
  //if the resulting array is longer than the previous one  add a new level
  while(curr_length > prev_length){
  arr = arr.flat();
  prev_length = curr_length
  curr_length = arr.length;
  levels ++
  }
  return levels;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
