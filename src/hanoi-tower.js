const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed, from, to) {
  if (disksNumber==0) return;

  calculateHanoi(disksNumber-1, turnsSpeed, from, to);

  // calculateHanoi(from,to);

  // callStack.push([from,to]); // save parameters to callStack array
  
  calculateHanoi(disksNumber-1, turnsSpeed, from, to);

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  calculateHanoi
};
