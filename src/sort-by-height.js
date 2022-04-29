const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  var b = arr.slice();
    var pos = [];
    var i = -1;
    while ((i = arr.indexOf(-1, i+1)) > -1) {
        pos.push(i);
    }
    var rpos = pos.slice();
    while(rpos.length){
        b.splice(rpos.pop(), 1);
    } 

    b.sort((arr,b)=>arr-b);
    while(pos.length) {
        b.splice(pos.shift(), 0, -1);
    }
    return b;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
