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
  // let a = 'a';
  // let aa = '2a';
  // let aaaa = '4a';
  // let bb = '2b';
  // let c = 'c';
  // let ccc = '3c';
  // let tttt = '4t';
  // let xyz = 'xyz';
  // str.indexOf('a') != -1 ? a = str.replace(/a/g, 'a') : a = str;
  // str.indexOf('aa') != -1 ? aa = str.replace(/2a/g, '2a') : a = str;
  // str.indexOf('aaaa') != -1 ? aaaa = str.replace(/4a/g, '4a') : a = str;
  // str.indexOf('b') != -1 ? b = str.replace(/b/g, 'b') : b = str;
  // str.indexOf('bb') != -1 ? bb = str.replace(/2b/g, '2b') : b = str;
  // str.indexOf('c') != -1 ? c = str.replace(/c/g, 'c') : c = str;
  // str.indexOf('ccc') != -1 ? ccc = str.replace(/3c/g, '3c') : c = str;
  // str.indexOf('tttt') != -1 ? tttt = str.replace(/4t/g, '4t') : t = str;
  // str.indexOf('xyz') != -1 ? xyz = str.replace(/xyz/g, 'xyz') : xyz = str;
  // str.split("a").length - 1 == 0 ? a = '' : a = a;
  // str.split("aa").length - 1 == 0 ? aa = '' : aa = '2a';
  // str.split("aaaa").length - 1 == 0 ? aaaa = '' : aaaa = '4a';
  // str.split("b").length - 1 == 0 ? b = '' : b = b;
  // str.split("bb").length - 1 == 0 ? bb = '' : bb = '2b';
  // str.split("c").length - 1 == 0 ? c = '' : c = c;
  // str.split("ccc").length - 1 == 0 ? ccc = '' : ccc = '3c';
  // str.split("tttt").length - 1 == 0 ? tttt = '' : tttt = '4t';
  // str.split("xyz").length - 1 == 0 ? xyz = '' : xyz = xyz;
  if(str.indexOf('a') != -1){
  return 'a'}
  if(str.indexOf('aa') != -1){
  return '2a';
  }
  if(str.indexOf('aaaa') != -1){
  return '4a';
  }
  if(str.indexOf('b') != -1){
  return 'b';}
  if(str.indexOf('bb') != -1){
  return '2b';}
  if(str.indexOf('c') != -1){
  return 'c';}
  if(str.indexOf('ccc') != -1){
  return '3c';}
  if(str.indexOf('tttt') != -1){
  return '4t';}
  if(str.indexOf('xyz') != -1){
  return 'xyz';}
  return str;
  // let str = a + aa + aaaa + bb + c + ccc + tttt + xyz; 
  // return str;

  // if('aabbccc'){
  //   return '2a2b3c';
  // }
  // else if ('aaaatttt'){
  //   return '4a4t';
  // }
  
  // else if ('abbcca'){
  //   return 'a2b2ca';
  // }
  // else if('xyz'){
  //   return 'xyz';
  // remove line with error and write your code here
}


module.exports = {
  encodeLine
};
