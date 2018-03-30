var origin_arr01 = [1,2,3];
var origin_arr02 = [4,5,6];

// 01合并02:
function oneToTwo(arr01,arr02) {
  var merge_arr = arr01.concat(arr02);
  console.log('01合并02后')
  console.log(merge_arr)
}
// 02在后面:
oneToTwo(origin_arr01, origin_arr02);
// 02在前面:
oneToTwo(origin_arr02, origin_arr01);

