// 源数组；
// var arr = [5, 2, 1, 2, 4, 3, 5, 6, 7, 1, 0, 6, 7, 1, 0, 5, 6, 7, 11, 1];
var arr = [5, 2, 1];


function selectSort(_arr) {
  console.time('选择排序花费时间')
  console.log('开始')
  var len = _arr.length,
  i,j,temp;
  for (i = 0; i < len; i++) {
    var min = _arr[i];
    for (j = i+1; j < len; j++) {
      debugger;
      if (arr[j]<min) {
        temp = min;
        min = _arr[j];
        _arr[j] = temp;
      }
    }
    _arr[i] = min;
  }
  console.log('结束')
  console.timeEnd('选择排序花费时间')
  return _arr;
}

var selectSort_arr = selectSort(arr);
console.log(selectSort_arr)