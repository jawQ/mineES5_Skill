// 添加:

// 源数组:
var arr = [1, 2, 3];

/**
 * 方法1: push(item1,item2...,itemX)
 * 定义： 向数组的末尾添加一个或更多元素，并返回新数组的长度(length)。
 * 优点： 
 * 缺点: 
 *  */
function _push(_arr) {
  console.log('看看源数组被改变没')
  console.log(_arr)
  var result_arr = _arr.push('益')
  console.log('查看被push后会怎样')
  console.log(result_arr)
  console.log('看看源数组被改变没')
  console.log(_arr)
}
// _push(arr)

/**
 * 方法2：splice()
 * 定义： 删除元素，并向数组添加新元素。
 * 缺点: 
 *      1. 会改变源数组
 *  */
function _splice(_arr) {
  console.log('看看源数组被改变没')
  console.log(_arr)
  // 添加
  // 再索引1处，添加2个元素,并不删除元素：
  // var result_arr = _arr.splice(1, 0, '张', '国', '荣')
  // 或
  // var result_arr = _arr.splice(1, '张', '国', '荣')
  // 再索引1处，添加2个元素,并删除1个元素：
  var result_arr = _arr.splice(1, 1, '张', '国', '荣')
  console.log('查看被splice后会怎样')
  console.log(result_arr)
  console.log('看看源数组被改变没')
  console.log(_arr)
}

// _splice(arr);


/**
 * 方法2：unshift()
 * 定义： 向数组的开头添加一个或更多元素，并返回新数组的长度(length)。
 * 缺点: 
 *  */


function _unshift(_arr) {
  console.log('看看源数组被改变没')
  console.log(_arr)
  var result_arr = _arr.unshift('我到开头啦')
  console.log('查看被push后会怎样')
  console.log(result_arr)
  console.log(_arr.unshift('我又到开头啦'))
  console.log('看看源数组被改变没')
  console.log(_arr)
}
_unshift(arr);