// var arr = [5, 2, 1, 2, 4, 3, 5, 6, 7, 1, 0, 6, 7, -1, 0, 5, 6, 7, -11, 1];
var arr = [5, 2, 1, 2, 4, 3, 5, 6, 7, 1, 0, 6, 7, 1, 0, 5, 6, 7, 11, 1];

/**
 * 1. 冒泡
 * 从头到尾;
 * 
 * 缺点：
 *      1. 每次比较完都创建一个变量，浪费内存；
 */



function bubbleSort(_arr) {
  var len = _arr.length,
  i,j;
  for (i = 0; i < len; i++) {
    for (j = i+1; j < len; j++) {
      if (_arr[i] > _arr[j]) {
        var temp;
        temp = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = temp;
      }
    }
  }
  return _arr;
}

// var result_arr = bubbleSort(arr);
console.log(-1 > 1)
console.log(-1 < 1)
console.log(-1<-11)
console.log('-1'<'-11')
