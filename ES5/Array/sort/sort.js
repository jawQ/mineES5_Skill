// 源数组；
var arr = [5, 2, 1, 2, 4, 3, 5, 6, 7, 1, 0, 6, 7, 1, 0, 5, 6, 7, 11, 1];

// 排序规则：
// 降序：
function _desc(a, b) {
  return b-a;
}
// 升序：
function _asc(a, b) {
  return a-b;
}



// 开始排序：
// 升序：
var _asc_arr = arr.sort(_asc)
// 降序：

console.log('升序数组：')
console.log(_asc_arr)

var _desc_arr = arr.sort(_desc)
console.log('降序数组：')
console.log(_desc_arr)

console.log('源数组被影响了，看...')

console.log(arr)
