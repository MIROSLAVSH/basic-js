const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  if(date === getMonth(12, 1, 2)){
    return 'winter'}
  if(date === getMonth(3, 4, 5)){
    return 'spring'}
  if(date === getMonth(6, 7, 8)){
    return 'summer'}
  if(date === getMonth(9, 10, 11)){
    return 'fall'}
    // remove line with error and write your code here
}

module.exports = {
  getSeason
};
