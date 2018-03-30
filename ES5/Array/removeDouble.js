/**
 * 外层,内层都从头开始.
 * 
 */
var _arr = [5, 2, 1, 2, 4, 3, 5, 6, 7, 1, 0, 6, 7, 1, 0, 5, 6, 7, 1, 1];
function removeDoubel(array) {
  console.log('这是未去重的数组')
  console.log(array)
  var i,
    k,
    len = array.length
  for (i = 0; i < len; i++) {
    debugger
    for (k = i+1; k < len; k++) {
      var jawq_i = array[i];
      var jawq_k = array[k];
      if (jawq_i == jawq_k) {
        array.splice(k, 1);
        len--;
        k--;
      }
    }
  }
  return array;
}
console.log('这是已经去重的数组')
console.log(removeDoubel(_arr));


/**
 * 外层: 从头开始;
 * 内层: 从后面开始.
 */
// function removeDoubel(array) {
//   console.log('这是未去重的数组')
//   console.log(array)
//   var i,
//     k,
//     len = array.length
//   for (i = 0; i < len; i++) {
//     debugger
//     for (k = len-1; k > i; k--) {
//       var jawq_i = array[i];
//       var jawq_k = array[k];
//       if (jawq_i == jawq_k) {
//         array.splice(k,1);
//         len--;
//         // k--;
//       }
//     }
//   }
//   return array;
// }
// console.log('这是已经去重的数组')
// console.log(removeDoubel(_arr));