/**
 * 1. 数组倒序输出。
 * 2. 倒序并去重。
 * 3. 合并数组，并删除新数组第2个项。
 * 4. 数组去重，并排序。
 */




//*****1. 数组倒序输出。*******/

// 源数组
var arr = [10, 11, 9, 1, 2, 3, 4, 5, 6, 7, 8 ,2, 3, 4, 5, 0];

// 排序方法:
// 升序
// ascend ==> ASC
function _AscArr(a, b) {
  return a - b;
}
// 降序
// descend ==> DESC
function _DescArr(a, b) {
  return b - a;
}

function _reverse(_array) {
  // console.log('源数组结构:')
  // console.log(_array)
  // 先从大到小排序:
  var sortArr = _array.sort(_AscArr)
  // console.log('升序的数组结构')
  // console.log(sortArr)
  // console.log('降序的数组结构')
  // console.log(_array.sort(_DescArr))
  // console.log('倒序后的数组结构:')
  // console.log(sortArr.reverse())
  return sortArr.reverse()
}
// _reverse(arr);


//*****2. 倒序并去重。*******/
function descRemoveDouble(shape_arr) {
  var _arr = [...shape_arr]
  console.log('源数组结构:')
  console.log(_arr)
  // 倒序:
  var descArr = _reverse(_arr)
  console.log('倒序数组:')
  console.log(descArr)
  // 去重:
  var removeDouble = require('../removeDouble').descRemoveDouble
  var singleArr = removeDouble(descArr)
  console.log('倒序,并去重了的数组')
  console.log(singleArr)
}
// descRemoveDouble(arr)



//*****3. 合并数组，并删除新数组第2个项。*******/
function mergeArr(origin_arr) {
  console.log('原始数组')
  console.log(origin_arr)
  var temporary_arr = [2,4,6,8,10]
  console.log(temporary_arr)
  var merge_Arr = origin_arr.concat(temporary_arr)
  console.log('合并后的数组')
  console.log(merge_Arr)
  
  console.log('查看被删除的那个元素')
  // console.log(merge_Arr.slice(0, 1))
  // console.log(merge_Arr.slice(1))
  
  console.log('查看删除合并后的数组中第二位后的数组,看看11是不是没了')
  console.log(merge_Arr.slice(0, 1).concat(merge_Arr.slice(2)))
  console.log('而且不影响原数组,看看11是不是还在原数组')
  
  console.log(merge_Arr)
}

// mergeArr(arr)


//*****4. 数组去重，并排序。*******/

function removeDoubleSort(origin_arr) {
  console.log('原始数组')
  console.log(origin_arr)
  var temporary_arr = origin_arr.slice(0)
  console.log(temporary_arr)

  var removeDouble = require('../removeDouble')
  var removeDouble_arr = removeDouble.descRemoveDouble(temporary_arr)
  console.log('查看去重后的数组')
  console.log(removeDouble_arr)
  
  console.log('查看升序的数组')
  console.log(removeDouble_arr.sort(_AscArr))
  
  console.log('查看降序的数组')
  console.log(removeDouble_arr.sort(_DescArr))
}
removeDoubleSort(arr)