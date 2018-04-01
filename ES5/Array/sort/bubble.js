// var arr = [5, 2, 1, 2, 4, 3, 5, 6, 7, 1, 0, 6, 7, -1, 0, 5, 6, 7, -11, 1];
var arr = [5, 2, 1, 2, 4, 3, 5, 6, 7, 1, 0, 6, 7, 1, 0, 5, 6, 7, 11, 1];

/**
 * 1. 冒泡
 * 从头到尾;
 * 思想：就是比较 前一个和后一个  之间的大小，如果前一个大于后一个的值，那么就互相调换位置，前一个换到后一个的位置，而后一个换到前一个的位置。直到比较完毕。
 * 
 * 缺点：
 *      1. 每次比较完都创建一个变量，浪费内存；
 */

// 毫秒生成器：
function timer() {
  var time = new Date()
  // console.log('计时开始...')
  // console.log(time)
  // console.log(time.getTime())
  return time.getTime()
}
// 降序
function bubble_desc(_arr) {
  console.time('冒泡降序花费时间')
  console.log('开始')
  var len = _arr.length,
    i, j, temp;
  for (i = 0; i < len-1; i++) {
    for (j = i + 1; j < len; j++) {
      if (_arr[i] > _arr[j]) {
        temp = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = temp;
      }
    }
  }
  console.log('结束')
  console.timeEnd('冒泡降序花费时间')
  return _arr;
}
// 升序
function bubble_asc(_arr) {
  var begin = timer()
  var len = _arr.length,
    i, j, temp;
  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (_arr[i] < _arr[j]) {
        temp = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = temp;
      }
    }
  }
  var over = timer()
  console.log('花费的时间')
  console.log(over - begin + '毫秒')
  return _arr;
}

var desc_arr = bubble_desc(arr);
// var acs_arr = bubble_asc(arr);
console.log(desc_arr)