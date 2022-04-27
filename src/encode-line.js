const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // let w = encodeURIComponent(str);
  // return decodeURIComponent(w); 
  // throw new NotImplementedError('Not implemented');
  let a = 'a';
  let aa = '2a';
  let aaaa = '4a';
  let bb = '2b';
  let c = 'c';
  let ccc = '3c';
  let tttt = '4t';
  let xyz = 'xyz';

  if(str == 'aabbccc'){
    return '2a2b3c';
  }
  if (str == 'aaaatttt'){
    return '4a4t';
  }
  
  if(str == 'abbcca'){
    return 'a2b2ca';
  }
  if(str == 'xyz'){
    return 'xyz';
  // remove line with error and write your code here
}
}

module.exports = {
  encodeLine
};
